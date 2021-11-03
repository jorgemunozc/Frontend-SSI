<template>
  <div class="container">
    <Navbar />
  </div>
  <div class="container mx-2 overflow-x-auto h-5/6">
    <Formulario29
      :folio="folio"
      :editable="false"
      :periodo="periodoTributario"
      :datos-empresa="empresa"
    />
  </div>
</template>

<script lang="ts">
/**
 * TODO: Ver que hacer cuando refrescan el navegador (la store se resetea)
 */
import store from "@/store/f29.module";
import { defineComponent, reactive } from "vue";
import { obtenerDatosEmpresa } from "@/utils/loadUserData";
import Formulario29 from "@/views/f29/Formulario29.vue";
import Navbar from '@/components/Navbar.vue';

export default defineComponent({
  components: {
    Formulario29,
    Navbar,
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
    const f29Data = store.state;
    const folio = f29Data.folio;
    const periodoTributario = {
      month: Number(props.month),
      year: Number(props.year)
    }
    const empresa = reactive({
      razonSocial: "",
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      rut: "",
    });
    obtenerDatosEmpresa(empresa);
    return {
      folio,
      empresa,
      periodoTributario
    };
  },
});
</script>
