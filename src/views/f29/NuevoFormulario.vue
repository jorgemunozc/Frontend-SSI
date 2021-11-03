<template>
  <div class="container">
    <Navbar />
  </div>
  <div class="container h-2/4 flex flex-col flex-grow">
    <h3 class="text-blue-700 font-semibold text-center px-4 mb-4">
      INGRESO DE DECLARACION MENSUAL Y PAGO DE IMPUESTOS EN FORMULARIO 29
    </h3>
    <div class="f29-wrapper flex-grow">
      <Formulario29
        :folio="folio"
        :datos-empresa="empresa"
        :periodo="{ month: Number(month), year: Number(year) }"
      />
    </div>
    <div class="f29__botones">
      <button
        class="
          w-20
          flex
          justify-center
          items-center
          bg-blue-700
          hover:bg-blue-800
          text-white
          rounded
          px-4
          h-8
        "
        @click="mostrarConfirmacion"
      >
        Enviar
      </button>
      <button
        class="
          w-20
          flex
          justify-center
          items-center
          bg-blue-700
          hover:bg-blue-800
          text-white
          rounded
          px-4
          h-8
        "
        @click="guardarFormulario"
      >
        <LoadingSpinner v-if="isSaving" />
        <span v-else>Guardar</span>
      </button>
      <button
        class="
          w-20
          flex
          justify-center
          items-center
          bg-yellow-400
          hover:bg-yellow-500
          text-white
          rounded
          px-4
          h-8
        "
        @click="limpiarForm"
      >
        Borrar
      </button>
    </div>
    <AlertBase
      v-if="showAlert"
      v-model:isOpen="showAlert"
      :type="alertType"
      :mensaje="alertMsg"
      class="container"
    />

    <div
      v-if="showPopUp"
      class="popup-bg"
    >
      <div class="popup-wrapper">
        <div
          v-if="showRedirect"
          class="text-center"
        >
          <h2 class="text-base sm:text-lg font-bold">
            Formulario enviado exitosamente
          </h2>
          <p>Redirigiendo...</p>
          <LoadingSpinner />
        </div>
        <div v-else>
          <h2 class="text-center font-bold text-sm sm:text-lg">
            {{ title }}
          </h2>
          <p class="text-center text-xs sm:text-base">
            {{ msg }}
          </p>
          <div class="flex justify-center mt-4">
            <button
              class="
                mx-8
                bg-blue-700
                hover:bg-blue-800
                text-white
                rounded
                h-8
                w-24
              "
              @click="enviarFormulario"
            >
              <LoadingSpinner v-if="isLoading" />
              <span v-else>Aceptar</span>
            </button>
            <button
              class="
                mx-8
                bg-red-700
                hover:bg-red-800
                text-white
                rounded
                h-8
                w-24
              "
              @click="cerrarConfirmacion"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed } from "vue";
import Formulario29 from "@/views/f29/Formulario29.vue";
import Navbar from "@/components/Navbar.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import AlertBase from "@/components/AlertBase.vue";
import { obtenerDatosEmpresa } from "@/utils/loadUserData";
import store from "@/store/f29.module";
import { guardarF29, actualizarF29 } from "@/services/F29Service";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "NuevoF29",
  components: {
    Formulario29,
    Navbar,
    LoadingSpinner,
    AlertBase,
  },
  props: {
    month: {
      type: Number,
      required: true
    },
    year: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const f29Store = store;
    const f29Data = store.state;
    const router = useRouter();
    let puedeInsertar = false; //Verifica si puede crear un nuevo formulario
    const folio = computed(() => f29Data.folio);
    const estadof29 = f29Store.state.estado;
    const isLoading = ref(false);
    const isSaving = ref(false);
    const showRedirect = ref(false);
    const showAlert = ref(false);
    const alertType = ref("normal");
    const alertMsg = ref("");
    const periodoTributario = `${props.year}-${
      props.month < 10 ? "0" + props.month : props.month
    }-01`;
    const empresa = reactive({
      razonSocial: "",
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      rut: "",
    });

    obtenerDatosEmpresa(empresa);

    if (folio.value === 0 && typeof estadof29 == "undefined") {
      puedeInsertar = true;
    }

    const enviarFormulario = function () {
      isLoading.value = true;
      if (puedeInsertar) {
        guardarF29(f29Data, "ENVIADO", periodoTributario)
          .then((res) => {
            f29Store.setValue("folio", res.folio);
            puedeInsertar = false;
            mostrarRedireccion();
            redirigirAComprobante();
          })
          .catch((err) => {
            if (err.response.status === 400) {
              const errorMsg = err.response.data.error;
              cerrarConfirmacion();
              mostrarAlerta(errorMsg, true);
            } else {
              console.error(err.response.data);
            }
          });
      } else {
        actualizarF29(f29Data, folio.value, "ENVIADO")
          .then(() => {
            puedeInsertar = false;
            mostrarRedireccion();
            redirigirAComprobante();
          })
          .catch((err) => {
            if (err.response.status === 400) {
              const errorMsg = err.response.data.error;
              cerrarConfirmacion();
              mostrarAlerta(errorMsg, true);
            } else {
              console.error(err.response.data);
            }
          });
      }
    };

    const guardarFormulario = function () {
      isSaving.value = true;
      if (puedeInsertar) {
        guardarF29(f29Data, "GUARDADO", periodoTributario)
          .then((res) => {
            f29Store.setValue("folio", res.folio);
            puedeInsertar = false;
            mostrarAlerta("Formulario guardado correctamente.", false);
          })
          .catch((err) => {
            if (err.response.status === 400) {
              const errorMsg = err.response.data.error;
              mostrarAlerta(errorMsg, true);
            } else {
              console.error(err.response.data);
            }
          })
          .finally(() => (isSaving.value = false));
      } else {
        actualizarF29(f29Data, folio.value, "GUARDADO")
          .then(() => {
            mostrarAlerta("Formulario guardado correctamente.", false);
          })
          .catch((err) => {
            if (err.response.status === 400) {
              const errorMsg = err.response.data.error;
              mostrarAlerta(errorMsg, true);
            } else {
              console.error(err.response.data);
            }
          })
          .finally(() => (isSaving.value = false));
      }
    };

    const limpiarForm = () => f29Store.resetValues(true);

    const showPopUp = ref(false);
    const title = "¿Está seguro que desea enviar declaración de impuestos?";
    const msg =
      "Una vez enviada la declaración no podrá realizar modificaciones.";
    const mostrarConfirmacion = () => {
      if (isLoading.value === true) {
        isLoading.value = false;
      }
      showPopUp.value = true;
    };

    const cerrarConfirmacion = () => (showPopUp.value = false);
    const mostrarRedireccion = () => (showRedirect.value = true);

    const redirigirAComprobante = () => {
      setTimeout(() => {
        router.push("f29-comprobante");
      }, 3000);
    };

    const mostrarAlerta = function (msg: string, isError: boolean) {
      if (isError) {
        alertType.value = "error";
      } else {
        alertType.value = "normal";
      }
      alertMsg.value = msg;
      showAlert.value = true;
    };

    // const addNotNullListener = function () {

    // }
    return {
      limpiarForm,
      // print,
      enviarFormulario,
      guardarFormulario,
      mostrarConfirmacion,
      cerrarConfirmacion,
      puedeInsertar,
      showPopUp,
      showRedirect,
      title,
      msg,
      empresa,
      folio,
      periodoTributario,
      isLoading,
      showAlert,
      alertType,
      alertMsg,
      isSaving,
    };
  },
});
</script>

<style scoped>
.f29__botones {
  width: 90%;
  margin: 1rem auto;
  display: flex;
  justify-content: space-around;
}

.popup-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 998;
  cursor: not-allowed;
  margin: 0;
  padding: 0;
}

.popup-wrapper {
  position: relative;
  top: 50%;
  width: 300px;
  z-index: 997;
  background-color: white;
  cursor: default;
  padding: 10px;
  margin: 0 auto;
  box-shadow: 1px 1px 8px 2px rgb(104, 101, 101);
}

@media screen and (min-width: 640px) {
  .popup-wrapper {
    width: 600px;
  }
}
</style>