<template>
  <td class="border-0 border-r border-gray-300">
    <div>{{ solicitud.razon_social }}</div>
  </td>
  <td class="border-0 border-r border-gray-300">
    <div>{{ solicitud.giro }}</div>
  </td>
  <td class="border-0 border-r border-gray-300">
    <div>{{ solicitud.correo }}</div>
  </td>
  <td class="text-center border-0 border-gray-300">
    <button
      class="w-8 bg-green-600 hover:bg-green-800 text-white mx-2 rounded"
      @click="aceptarSolicitud"
    >
      <i class="pi pi-check"></i>
    </button>
    <button
      class="w-8 bg-red-600 hover:bg-red-800 text-white mx-2 rounded"
      @click="rechazarSolicitud"
    >
      <i class="pi pi-times"></i>
    </button>
    <div
    v-if="isProcessing"
      class="
        absolute
        top-0
        left-0
        h-full
        w-full
        bg-gray-200
        z-10
        flex
        items-center
        justify-center
        bg-opacity-60
      "
    >
      <LoadingSpinner />
    </div>
  </td>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { modificarSolicitud } from "@/services/SolicitudService";
import { crearEmpresa, eliminarEmpresa } from "@/services/EmpresaService";
import { crearUsuario } from "@/services/AuthService";
import Estado from "@/types/enums/Estado";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

const enum Acciones {
  APROBAR_SOLICITUD,
  CREAR_EMPRESA,
  CREAR_USUARIO,
}

export default defineComponent({
  name: "SolicitudItem",
  components: {
    LoadingSpinner,
  },
  props: {
    solicitud: {
      type: Object as PropType<Solicitud>,
      required: true,
    },
  },
  emits: ["itemChanged:approved", "itemChanged:rejected", "newMessage"],
  setup(props, { emit }) {
    const isProcessing = ref(false);

    const aceptarSolicitud = () => {
      //Arreglo donde se mantendra las acciones ejecutadas exitosamente
      //en caso de necesitar hacer un rollback.
      const colaAcciones: Acciones[] = [];
      const dataAcciones: { [key: number]: number } = [];
      isProcessing.value = true;

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
        })
        .finally(() => {
          isProcessing.value = false;
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
      isProcessing,
    };
  },
});
</script>
