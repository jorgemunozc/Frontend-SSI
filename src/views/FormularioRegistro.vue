<template>
  <div class="ui text container">
    <div
      class="ui tiny warning icon message"
      style="margin-bottom: 3rem"
    >
      <i class="attention icon" />
      <div class="content">
        <div class="header">
          Informaci&oacute;n
        </div>
        <ul class="info-text list">
          <li>
            Para tener acceso a la plataforma debe llenar el siguiente formulario.
          </li>
          <li>
            Una vez enviado el formulario, el profesor de la asignatura o un encargado
            del sitio revisionara su solicitud de acceso.
          </li>
          <li>
            Si su solicitud es aceptada, enviaremos un mensaje al correo registrado
            con los datos de acceso al sitio.
          </li>
        </ul>
      </div>
    </div>
    <h1 class="ui header">
      Formulario de Registro
    </h1>
    <form
      class="ui large form"
      @submit.prevent="register"
    >
      <div
        class="field"
        :class="{'error': errores.razon_social}"
        style="position:relative"
      >
        <div class="p-float-label">
          <InputText
            id="razon_social"
            v-model="solicitud.razon_social"
            type="text"
          />
          <label for="razon_social">Razon Social</label>
        </div>
        <small
          v-if="errores.razon_social"
          class="ui pointing red label"
        >{{ errores.razon_social }}</small>
      </div>
      <div
        class="field"
        :class="{'error': errores.giro}"
      >
        <div class="p-float-label">
          <GirosDropdown
            v-model="solicitud.giro"
            :class="{'p-invalid': errores.giro}"
          />
          <label for="">Giro</label>
        </div>
      </div>
      <div
        class="inline fields"
        :class="{'error': errores.correo}"
      >
        <div class="field ten wide">
          <div class="p-float-label">
            <InputText
              v-model="correoParcial"
              type="text"
            />
            <label for="correo">Correo</label>
          </div>
        </div>
        <div class="field">
          <i class="large at icon" />
        </div>
        <div class="inline field six wide">
          <DominiosDropdown v-model="dominioCorreo" />
        </div>
        <small
          v-if="errores.correo"
          class="ui left pointing red label"
        >{{ errores.correo }}</small>
      </div>
      <div
        class="field"
        :class="{'error': errores.domicilio}"
      >
        <div class="p-float-label">
          <InputText
            id="domicilio"
            v-model="solicitud.domicilio"
            type="text"
            name="domicilio"
          />
          <label for="">Direccion</label>
        </div>
        <small
          v-if="errores.domicilio"
          class="ui pointing red label"
        >{{ errores.domicilio }}</small>
      </div>
      <div
        class="field"
        :class="{'error': errores.ciudad}"
      >
        <div class="p-float-label">
          <InputText
            id="ciudad"
            v-model="solicitud.ciudad"
            type="text"
            name="ciudad"
          />
          <label for="ciudad">Ciudad</label>
        </div>
        <small
          v-if="errores.ciudad"
          class="ui pointing red label"
        >{{ errores.ciudad }}</small>
      </div>
      <button
        class="massive ui fluid submit button blue"
        :class="{'loading': isLoading}"
      >
        Registrar
      </button>
    </form>
    <div
      v-if="message"
      class="ui message"
      :class="{'error': hasError, 'success': !hasError}"
    >
      <small v-html="message" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
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

    const errores = ref({
      razon_social: null,
      correo: null,
      domicilio: null,
      ciudad: null,
      giro: null,
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
      errores,
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
      this.cleanErrors();
      crearSolicitud(this.solicitud)
        .then(() => {
          this.mostrarMensaje(this.successMsg);
        })
        .catch((error) => {
          const statusCode = error.response.status;
          let msg = "";
          this.hasError = true;
          this.pushErrors(error.response.data.errors);
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
    },

    parseMail(user: string, domain: string): string {
      return user + "@" + domain;
    },

    pushErrors(data) {
      console.log(data);
      if (typeof data != 'object') {
        return;
      }
      for (const field in data) {
        this.errores[field] = data[field][0];
      }
    },
    cleanErrors() {
      for (const field in this.errores) {
        this.errores[field] = null;
      }
    }
  },
});
</script>

<style lang="scss" scoped>
  .p-float-label {
    width: 100%;
  }

  .info-text {
    text-align: left;
  }
</style>
