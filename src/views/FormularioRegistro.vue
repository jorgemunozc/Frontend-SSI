<template>
  <div class="ui text container">
    <form @submit.prevent="register" class="ui large form">
      <div class="field">
        <div class="p-float-label">
          <InputText v-model="solicitud.razon_social" type="text" id="razon_social"/>
          <label for="razon_social">Razon Social</label>
        </div>
      </div>
      <div class="field">
        <div class="p-float-label">
          <GirosDropdown v-model="solicitud.giro" />
          <label for="">Giro</label>
        </div>
      </div>
      <div class="inline fields">
        <div class="field ten wide">
          <div class="p-float-label">
            <InputText type="text" v-model="correoParcial" />
            <label for="correo">Correo</label>
          </div>
        </div>
        <div class="field">
          <i class="large at icon"></i>
        </div>
        <div class="inline field six wide">
          <DominiosDropdown v-model="dominioCorreo" />
        </div>
      </div>
      <div class="field">
        <div class="p-float-label">
          <InputText
            type="text"
            v-model="solicitud.domicilio"
            name="domicilio"
            id="domicilio"
          />
          <label for="">Direccion</label>
        </div>
      </div>
      <div class="field">
        <div class="p-float-label">
          <InputText
            type="text"
            v-model="solicitud.ciudad"
            name="ciudad"
            id="ciudad"
          />
          <label for="ciudad">Ciudad</label>
        </div>
      </div>
      <button
        class="massive ui fluid submit button blue"
        :class="{'loading': isLoading}"
      >Registrar</button>
    </form>
    <div class="ui message" :class="{'error': hasError, 'success': !hasError}" v-if="message">
      <span v-html="message"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import DominiosDropdown from "@/components/DominiosDropdown.vue";
import GirosDropdown from "@/components/GirosDropdown.vue";
import { crearSolicitud } from "@/services/SolicitudService";

export default defineComponent({
  name: "FormularioRegistro",
  components: {
    DominiosDropdown,
    GirosDropdown,
  },
  setup() {
    const solicitud = ref({
      razon_social: "",
      correo: "",
      domicilio: "",
      ciudad: "",
      estado: "PENDIENTE",
      giro: "",
    });
    const dominioCorreo = ref("");
    const correoParcial = ref("");
    const message = ref("");
    const isLoading = ref(false);
    const hasError = ref(false);
    const successMsg = 'Su solicitud ha sido ingresada con exito.<br>' + 
                        'Una vez aprobada sera enviado un correo a la direccion registrada con los datos de acceso a la plataforma.';

    const mostrarMensaje = async (msg) => {
      message.value = msg;
      await setTimeout(() => {
        message.value = "";
        hasError.value = false;
      }, 6000);
    };
    return {
      solicitud,
      dominioCorreo,
      correoParcial,
      message,
      isLoading,
      hasError,
      mostrarMensaje,
      successMsg,
    };
  },

  methods: {
    register() {
      this.solicitud.correo = this.parseMail(
        this.correoParcial,
        this.dominioCorreo
      );
      console.log("Registrando formulario *beep beep*...");
      this.isLoading = true;
      crearSolicitud(this.solicitud)
        .then(() => {
          this.mostrarMensaje(this.successMsg);
        })
        .catch((error) => {
          const statusCode = error.response.status;
          let msg = "";
          this.hasError = true;
          switch (statusCode) {
            case 422:
              msg = "Complete todos los campos.";
              break;
            case 500:
            default:
              msg = "Error inesperado en el servidor.";
          }
          this.mostrarMensaje(`No se pudo procesar solicitud: ${msg}`);
        })
        .finally(() => {
          this.isLoading = false;
        });
      // if (solicitudCreada != null && solicitudCreada.id > 0) {
      //   this.$router.push()
      // }
    },

    parseMail(user: string, domain: string): string {
      return user + "@" + domain;
    },
  },
});
</script>

<style lang="scss" scoped>
  .p-float-label {
    width: 100%;
  }
</style>
