<template>
  <td>
    <div>{{ solicitud.razon_social }}</div>
  </td>
  <td>
    <div>{{ solicitud.giro }}</div>
  </td>
  <td>
    <div>{{ solicitud.correo }}</div>
  </td>
  <td>
    <button
      class="tiny ui dark teal button"
      @click="aceptarSolicitud"
    >
      Aceptar
    </button>
    <button
      class="tiny ui red button"
      @click="rechazarSolicitud"
    >
      Rechazar
    </button>
  </td>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { modificarSolicitud } from "@/services/SolicitudService";
import { crearEmpresa, eliminarEmpresa } from "@/services/EmpresaService";
import { crearUsuario } from "@/services/AuthService";
import Estado from "@/types/enums/Estado";

const enum Acciones {
  APROBAR_SOLICITUD,
  CREAR_EMPRESA,
  CREAR_USUARIO,
}

export default defineComponent({
  name: "SolicitudItem",
  props: {
    solicitud: {
      type: Object as PropType<Solicitud>,
      required: true,
    },
  },
  emits: ["itemChanged:approved", "itemChanged:rejected", "newMessage"],
  setup(props, { emit }) {
    const aceptarSolicitud = () => {
      //Arreglo donde se mantendra las acciones ejecutadas exitosamente
      //en caso de necesitar hacer un rollback.
      const colaAcciones: Acciones[] = [];
      const dataAcciones: { [key: number]: number } = [];

      modificarSolicitud(props.solicitud.id, "APROBADO")
        .then(() => {
          colaAcciones.push(Acciones.APROBAR_SOLICITUD);
          console.log("creando empresa...");
          return crearEmpresa(props.solicitud);
        })
        .then((empresa) => {
          const nuevoUsuario = {
            correo: props.solicitud.correo,
            rut: empresa.rut,
          };
          colaAcciones.push(Acciones.CREAR_EMPRESA);
          dataAcciones[Acciones.CREAR_EMPRESA] = empresa.rut;
          console.log("creando usuario...");
          return crearUsuario(nuevoUsuario);
        })
        .then(() => emit("itemChanged:approved"))
        .catch((err) => {
          /** Revisamos la cola de acciones para determinar
           * cuantas acciones hay que revertir
           */
          for (const accion of colaAcciones) {
            switch (accion) {
              case Acciones.APROBAR_SOLICITUD:
                console.log("rolling back solicitud...");
                modificarSolicitud(props.solicitud.id, Estado.PENDIENTE);
                break;
              case Acciones.CREAR_EMPRESA:
                eliminarEmpresa(dataAcciones[Acciones.CREAR_EMPRESA]);
                break;
              default:
            }
          }
          console.log(err.response.data.errors);
          sendMessage("error", err.response.data.errors);
        });
    };
    const rechazarSolicitud = () => {
      modificarSolicitud(props.solicitud.id, "RECHAZADO").then(() => {
        emit("itemChanged:rejected");
      });
    };

    const sendMessage = function (type: string, msg: string) {
      if (type === "error") {
        emit("newMessage", { type: "error", message: msg });
        return;
      }
      emit("newMessage", { type: "info", message: msg });
      return;
    };
    return {
      rechazarSolicitud,
      aceptarSolicitud,
    };
  },
});
</script>
