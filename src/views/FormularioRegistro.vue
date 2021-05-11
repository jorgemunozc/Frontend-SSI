<template>
  <form @submit.prevent="register" class="ui form horizontal grid">
    <div>
      <label for="razon_social" />Razon Social
      <input v-model="solicitud.razon_social" type="text" />
    </div>
    <GirosDropdown v-model="solicitud.giro" />
    <div>
      <label for="correo">Correo</label>
      <input type="text" v-model="correoParcial" />
      <DominiosDropdown v-model="dominioCorreo" />
    </div>
    <div>
      <label for="">Direccion</label>
      <input
        type="text"
        v-model="solicitud.domicilio"
        name="domicilio"
        id="domicilio"
      />
    </div>
    <div>
      <label for="ciudad">Ciudad</label>
      <input type="text" v-model="solicitud.ciudad" name="ciudad" id="ciudad" />
    </div>
    <input type="submit" value="Registrar" />
  </form>

  <div>
    <span v-if="message">{{message}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import DominiosDropdown from "@/components/DominiosDropdown.vue";
import GirosDropdown from '@/components/GirosDropdown.vue';
import { crearSolicitud } from "@/services/SolicitudService";

export default defineComponent({
  name: "FormularioRegistro",
  components: {
    DominiosDropdown,
    GirosDropdown,
  },
  setup() {
    let solicitud = ref({
      razon_social: "",
      correo: "",
      domicilio: "",
      ciudad: "",
      estado: "PENDIENTE",
      giro: ""
    });
    const dominioCorreo = ref("");
    const correoParcial = ref("");
    const message = ref("");
    const mostrarMensaje = (msg) => {
      message.value = msg;
      setTimeout(() => {
        message.value = '';
      }, 2000);
    }
    return {
      solicitud,
      dominioCorreo,
      correoParcial,
      message,
      mostrarMensaje,
    };
  },

  methods: {
    async register() {
      this.solicitud.correo = this.parseMail(this.correoParcial, this.dominioCorreo);
      console.log("Registrando formulario *beep beep*...");
      console.log(this.solicitud.correo);
      await crearSolicitud(this.solicitud)
              .then(res => {
                res
              })
              .catch((error) => {
                const statusCode = error.response.status;
                let msg = '';
                switch (statusCode) {
                  case 422:
                    msg = 'Complete todos los campos.';
                    break;
                  case 500:
                  default:
                    msg = 'Error inesperado en el server.';
                }
                this.mostrarMensaje(`No se pudo procesar solicitud: ${msg}`);
                return null;
              });
      // if (solicitudCreada != null && solicitudCreada.id > 0) {
      //   this.$router.push()
      // }
    },

    parseMail(user: string, domain: string): string {
      return user + '@' + domain;
    },

  },
});
</script>
