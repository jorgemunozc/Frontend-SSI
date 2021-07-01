<template>
  <h2>INGRESO DE DECLARACION MENSUAL Y PAGO DE IMPUESTOS EN FORMULARIO 29</h2>
  <div class="f29-wrapper">
    <Formulario29 :folio="folio" :datosEmpresa="empresa" :periodo="{month, year}"/>
  </div>
  <div class="f29__botones">
    <button class="ui blue button" @click="mostrarConfirmacion">Enviar Formulario</button>
    <button class="ui blue button" @click="guardarFormulario">Guardar Formulario</button>
    <button class="ui yellow button" @click="limpiarForm">Borrar Formulario</button>
  </div>

  <div class="popup--wrapper" v-if="showPopUp">
    <div class="popup__confirmacion" >
      <h2 class="popup__title">{{ title }}</h2>
      <p class="popup__message">{{ msg }}</p>
      <div class="popup__botones">
        <button class="ui blue button" @click="enviarFormulario">Aceptar</button>
        <button class="ui red button" @click="cerrarConfirmacion">Cancelar</button>
      </div>
    </div>
  </div>
  <div>tesst {{periodoTributario}}</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import Formulario29 from '@/views/f29/Formulario29.vue';
import { obtenerDatosEmpresa } from '@/utils/loadUserData';
import store from '@/store';
import { guardarF29, actualizarF29 } from '@/services/F29Service';


export default defineComponent({
  name: "NuevoF29",
  components: {
    Formulario29,
  },
  props: ['month',  'year'],
  setup(props) {
    const formStore = store;
    const f29Data = store.state;
    let puedeInsertar = false;
    const folio = f29Data.folio;
    const estadof29 = formStore.state.estado;
    const periodoTributario = `${props.year}-${props.month < 10? '0' + props.month: props.month}-01`;
    const empresa = reactive({
      razonSocial: "",
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      rut: "",
    });

    obtenerDatosEmpresa(empresa);

    if (folio === 0 && typeof estadof29 == 'undefined') {
      puedeInsertar = true;
    }
    if (puedeInsertar) {
      console.log('MODO: GUARDAR');
    } else {
      console.log('MODO: ACTUALIZAR');
    }

    const enviarFormulario = function () {
      if(puedeInsertar) {
        guardarF29(f29Data, 'ENVIADO', periodoTributario).then(() => cerrarConfirmacion());
      } else {
        actualizarF29(f29Data, folio, 'ENVIADO').then(() => cerrarConfirmacion())
      }
    };

    const guardarFormulario = function () {
      if (puedeInsertar) {
        guardarF29(f29Data, 'GUARDADO', periodoTributario);
      } else {
        actualizarF29(f29Data, folio, 'GUARDADO');
      }
    };

    const limpiarForm = () => formStore.resetValues();

    
    const showPopUp = ref(false);
    const title = "Esta seguro que desea enviar declaracion de impuestos?";
    const msg = "Una vez enviada la declaracion no podra realizar modificaciones";
    const mostrarConfirmacion = () => showPopUp.value = true;

    const cerrarConfirmacion = () => showPopUp.value = false;

    return {
      limpiarForm,
      // print,
      enviarFormulario,
      guardarFormulario,
      mostrarConfirmacion,
      cerrarConfirmacion,
      puedeInsertar,
      showPopUp,
      title,
      msg,
      empresa,
      folio,
      periodoTributario,
    }
  }
})
</script>

<style scoped>
  .f29__botones {
  width: 90%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-around;
}


.popup--wrapper {
  position: absolute;
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

.popup__confirmacion {
  position: relative;
  top: 50%;
  left: calc(50% - 300px);
  width: 600px;
  z-index: 997;
  background-color: white;
  cursor: default;
  padding: 10px;
  margin: 0;
}

.popup__cancel-button {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  border: 1px solid;
}
</style>