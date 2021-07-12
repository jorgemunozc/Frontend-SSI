<template>
  <div class="container">
    <Navbar />
  </div>
  <div class="container">
    <h3 class="text-blue-700 font-semibold text-center px-4 mb-4">
      INGRESO DE DECLARACION MENSUAL Y PAGO DE IMPUESTOS EN FORMULARIO 29
    </h3>
    <div class="f29-wrapper">
      <Formulario29
        :folio="folio"
        :datosEmpresa="empresa"
        :periodo="{ month, year }"
      />
    </div>
    <div class="f29__botones">
      <button
        class="bg-blue-700 hover:bg-blue-800 text-white rounded px-4 h-8"
        @click="mostrarConfirmacion"
      >
        Enviar
      </button>
      <button
        class="bg-blue-700 hover:bg-blue-800 text-white rounded px-4 h-8"
        @click="guardarFormulario"
      >
        Guardar
      </button>
      <button
        class="bg-yellow-400 hover:bg-yellow-500 text-white rounded px-4 h-8"
        @click="limpiarForm"
      >
        Borrar
      </button>
    </div>
    <div class="popup-bg" v-if="showPopUp">
      <div class="popup-wrapper">
        <div v-if="showRedirect" class="text-center">
          <h2 class="text-lg font-bold">Formulario enviado exitosamente</h2>
          <p>Redirigiendo...</p>
          <LoadingSpinner class="w-full" />
        </div>
        <div v-else>
          <h2 class="text-center font-bold text-lg">{{ title }}</h2>
          <p class="text-center">{{ msg }}</p>
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
              <LoadingSpinner v-if="isLoading" class="w-full" />
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
import { defineComponent, ref, reactive } from "vue";
import Formulario29 from "@/views/f29/Formulario29.vue";
import Navbar from "@/components/Navbar.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import { obtenerDatosEmpresa } from "@/utils/loadUserData";
import store from "@/store";
import { guardarF29, actualizarF29 } from "@/services/F29Service";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "NuevoF29",
  components: {
    Formulario29,
    Navbar,
    LoadingSpinner,
  },
  props: ["month", "year"],
  setup(props) {
    const f29Store = store;
    const f29Data = store.state;
    const router = useRouter();
    let puedeInsertar = false;
    const folio = f29Data.folio;
    const estadof29 = f29Store.state.estado;
    const isLoading = ref(false);
    const showRedirect = ref(false);
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

    if (folio === 0 && typeof estadof29 == "undefined") {
      puedeInsertar = true;
    }
    if (puedeInsertar) {
      console.log("MODO: GUARDAR");
    } else {
      console.log("MODO: ACTUALIZAR");
    }

    const enviarFormulario = function () {
      isLoading.value = true;
      if (puedeInsertar) {
        guardarF29(f29Data, "ENVIADO", periodoTributario).then((res) => {
          f29Store.setValue('folio', res.folio);
          puedeInsertar = false;
          mostrarRedireccion();
          redirigirAComprobante();
        });
      } else {
        actualizarF29(f29Data, folio, "ENVIADO").then(() => {
          puedeInsertar = false;
          mostrarRedireccion();
          redirigirAComprobante();
        });
      }
    };

    const guardarFormulario = function () {
      if (puedeInsertar) {
        guardarF29(f29Data, "GUARDADO", periodoTributario);
      } else {
        actualizarF29(f29Data, folio, "GUARDADO");
      }
    };

    const limpiarForm = () => f29Store.resetValues();

    const showPopUp = ref(false);
    const title = "¿Está seguro que desea enviar declaración de impuestos?";
    const msg =
      "Una vez enviada la declaración no podrá realizar modificaciones.";
    const mostrarConfirmacion = () => (showPopUp.value = true);

    const cerrarConfirmacion = () => (showPopUp.value = false);
    const mostrarRedireccion = () => (showRedirect.value = true);

    const redirigirAComprobante = () => {
      setTimeout(() => {
        router.push("f29-comprobante");
      }, 3000);
    };

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
    };
  },
});
</script>

<style scoped>
.f29__botones {
  width: 90%;
  margin: 2rem auto;
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
  left: 20%;
  width: 60%;
  max-width: 600px;
  z-index: 997;
  background-color: white;
  cursor: default;
  padding: 10px;
  margin: 0;
  box-shadow: 1px 1px 8px 2px rgb(104, 101, 101);
}
</style>