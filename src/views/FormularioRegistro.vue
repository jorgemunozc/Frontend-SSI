<template>
  <div class="py-4 max-w-xl mx-2 md:mx-auto relative">
    <div
      class="
        flex
        items-center
        bg-yellow-50
        text-yellow-900
        border
        rounded
        border-yellow-900
        p-4
        mb-8
      "
    >
      <i class="pi pi-exclamation-circle text-2xl w-10 mr-8 md:text-4xl" />
      <div class=" text-xs md:text-sm">
        <div class="font-bold text-center">
          Información
        </div>
        <ul class="info-text list-disc">
          <li>
            Para tener acceso a la plataforma debe llenar el siguiente
            formulario.
          </li>
          <li>
            Una vez enviado el formulario, el profesor de la asignatura o un
            encargado del sitio revisionar&aacute; su solicitud de acceso.
          </li>
          <li>
            Si su solicitud es aceptada, enviaremos un mensaje al correo
            registrado con los datos de acceso al sitio.
          </li>
        </ul>
      </div>
    </div>

    <h1 class="text-2xl font-bold text-center mb-4 text-blue-600">
      Formulario de Registro
    </h1>
    <form
      class="flex flex-wrap text-sm"
      @submit.prevent="register"
    >
      <div
        class="w-full relative mb-9"
        :class="{ error: errores.razon_social }"
      >
        <div class="p-float-label">
          <InputText
            id="razon_social"
            v-model="solicitud.razon_social"
            type="text"
            class="w-full"
          />
          <label for="razon_social">Raz&oacute;n Social</label>
        </div>
        <div 
          v-if="errores.razon_social"
          class="w-full h-6 pl-2 my-1 absolute top-full bg-red-200 text-red-800 rounded-b"
        >
          <small>{{ errores.razon_social }}</small>
        </div>
      </div>
      <div class="w-full mb-1 flex flex-wrap items-center relative">
        <input 
          id="rutCheckbox"
          :value="poseeRut" 
          type="checkbox"
          @change="mostrarRut($event.target.checked)"
        >
        <label 
          for="rutCheckbox" 
          class="pr-2"
        >
          ¿Empresa posee RUT?
        </label>
        <div class="w-full text-xs flex">
          <i class="pi pi-info-circle text-xs text-yellow-800" />
          <small class="ml-1">Si no marca esta opción el sistema generará un RUT para su empresa.</small>
        </div>
      </div>
      <div 
        class="w-full relative mb-9"
        :class="{ error: errores.rut }"
      >
        <div class="p-float-label">
          <InputText
            id="rut"
            v-model.lazy="rutEmpresa"
            type="text"
            class="w-full"
            :disabled="!poseeRut"
            maxlength="10"
          />
          <label for="rut">Rut</label>
        </div>
        <div>
          <small>Ej: 80300200-8</small>
        </div>
        <div 
          v-if="errores.rut"
          class="w-full h-6 pl-2 my-1 absolute top-full bg-red-200 text-red-800 rounded-b"
        >
          <small>{{ errores.rut }}</small>
        </div>
      </div>
      <div
        class="w-full relative mb-9"
        :class="{ error: errores.giro }"
      >
        <div class="p-float-label">
          <GirosDropdown
            v-model="solicitud.giro"
            :class="{ 'p-invalid': errores.giro }"
            class="text-center w-full"
          />
          <label for="">Giro</label>
        </div>
        <div 
          v-if="errores.giro"
          class="w-full h-6 pl-2 my-1 absolute top-full bg-red-200 text-red-800 rounded-b"
        >
          <small>{{ errores.giro }}</small>
        </div>
      </div>
      <div
        class="w-full relative mb-9 flex"
        :class="{ error: errores.correo }"
      >
        <div class="flex-grow">
          <div class="p-float-label">
            <InputText
              v-model="correoParcial"
              type="text"
              class="w-full"
            />
            <label for="correo">Correo</label>
          </div>
        </div>
        <div class="text-3xl mx-1 flex items-center">
          @
        </div>
        <div class="w-1/3">
          <DominiosDropdown
            v-model="dominioCorreo"
            class="p-0"
          />
        </div>
        <div
          v-if="errores.correo"
          class="w-full h-6 pl-2 my-1 absolute top-full bg-red-200 text-red-800 rounded-b"
        >
          <small>{{ errores.correo }}</small>
        </div>
      </div>
      <div
        class="w-full relative mb-9"
        :class="{ error: errores.domicilio }"
      >
        <div class="p-float-label">
          <InputText
            id="domicilio"
            v-model="solicitud.domicilio"
            type="text"
            name="domicilio"
            class="w-full"
          />
          <label for="">Direcci&oacute;n</label>
        </div>
        <div
          v-if="errores.domicilio"
          class="w-full h-6 pl-2 my-1 absolute top-full bg-red-200 text-red-800 rounded-b"
        >
          <small>{{ errores.domicilio }}</small>
        </div>
      </div>
      <div 
        class="w-full relative mb-9" 
        :class="{ error: errores.ciudad }"
      >
        <div class="p-float-label">
          <InputText
            id="ciudad"
            v-model="solicitud.ciudad"
            type="text"
            name="ciudad"
            class="w-full"
          />
          <label for="ciudad">Ciudad</label>
        </div>
        <div v-if="errores.ciudad">
          <div class="w-full h-6 pl-2 my-1 absolute top-full bg-red-200 text-red-800 rounded-b">
            <small>{{ errores.ciudad }}</small>
          </div>
        </div>
      </div>
      <button
        class=" w-full inline-flex justify-center items-center p-4 bg-blue-600 hover:bg-blue-700 text-white rounded"
      >
        <svg
          :class="{'opacity-0': !isLoading}"
          class="animate-spin h-5 w-5 mr-3"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        <span>Registrar</span>
      </button>
    </form>
    <div
      v-if="message"
      class="border rounded p-2 text-center focus"
      :class="{ 'error-alert': hasError, 'success-alert': !hasError }"
    >
      <small v-html="message" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, reactive} from "vue";
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
    const solicitud = reactive({
      razon_social: "",
      correo: "",
      domicilio: "",
      ciudad: "",
      estado: "PENDIENTE",
      giro: "",
      rut: '' as string | null,
    });

    const errores = ref({
      razon_social: null,
      correo: null,
      domicilio: null,
      ciudad: null,
      giro: null,
      rut: null
    });

    const poseeRut = ref(false);
    const dominioCorreo = ref("");
    const correoParcial = ref("");
    const message = ref("");
    const isLoading = ref(false);
    const hasError = ref(false);
    const successMsg =
      "Su solicitud ha sido ingresada con éxito.<br>" +
      "Una vez aprobada será enviado un correo a la dirección registrada con los datos de acceso a la plataforma.";


    const rutEmpresa = computed({
      get: (): string => {
        if (solicitud.rut) {
          return solicitud.rut
        }
        return ''
      },
      set: (nuevoRut: string) => {
        if (nuevoRut) {
          solicitud.rut = nuevoRut
        }
      }
    });

    const mostrarRut = function (isChecked: boolean) {
      poseeRut.value = isChecked;
      if (isChecked) {
        solicitud.rut = '';
      } else {
        solicitud.rut = null;
      }
    }
    const mostrarMensaje = async (msg) => {
      message.value = msg;
      // await setTimeout(() => {
      //   message.value = "";
      //   hasError.value = false;
      // }, 10000);
    };
    return {
      solicitud,
      errores,
      dominioCorreo,
      correoParcial,
      message,
      isLoading,
      hasError,
      successMsg,
      poseeRut,
      rutEmpresa,
      mostrarMensaje,
      mostrarRut
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
      if (!this.poseeRut) {
        this.solicitud.rut = null
      }
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
      if (typeof data != "object") {
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
      this.hasError = false;
      this.message = '';
    },
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

.p-component:disabled {
  background-color: rgba(161, 159, 159, 0.39);
}
</style>
