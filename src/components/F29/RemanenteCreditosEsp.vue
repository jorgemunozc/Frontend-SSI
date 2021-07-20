<template>
  <table>
    <tr>
      <td class="celda-linea">
        114
      </td>
      <td colspan="12">
        Remanente Cr&eacute;dito por Sistemas Solares T&eacute;rmicos, Ley N°
        20.365
      </td>
      <td class="celda-codigo">
        728
      </td>
      <td class="f29__input-wrapper">
        <input
          v-model.lazy="datos.cod728"
          type="text"
          class="f29__input"
          maxlength="12"
          :disabled="!editable"
        >
      </td>
      <td class="celda-signo" />
    </tr>

    <tr>
      <td class="celda-linea">
        115
      </td>
      <td colspan="12">
        Remanente per&iacute;odo siguiente Pantente Aguas, Ley N° 20.017
      </td>
      <td class="celda-codigo">
        707
      </td>
      <td>
        <input
          v-model.lazy="datos.cod707"
          type="text"
          class="f29__input"
          maxlength="12"
          :disabled="!editable"
        >
      </td>
      <td class="celda-signo" />
    </tr>

    <tr>
      <td class="celda-linea">
        116
      </td>
      <td colspan="12">
        Remanente Cotizaci&oacute;n Adicional Ley 18.566/86
      </td>
      <td class="celda-codigo">
        73
      </td>
      <td>
        <input
          v-model.lazy="datos.cod73"
          type="text"
          class="f29__input"
          maxlength="12"
          :disabled="!editable"
        >
      </td>
      <td class="celda-signo" />
    </tr>

    <tr>
      <td class="celda-linea">
        117
      </td>
      <td colspan="12">
        Remanente Cr&eacute;dito Especial Empresas Constructoras
      </td>
      <td class="celda-codigo">
        130
      </td>
      <td>
        <input
          v-model.lazy="datos.cod130"
          type="text"
          class="f29__input"
          maxlength="12"
          :disabled="!editable"
        >
      </td>
      <td class="celda-signo" />
    </tr>

    <tr>
      <td class="celda-linea">
        118
      </td>
      <td colspan="12">
        Remanente Recuperaci&oacute;n Peajes Transportistas Pasajeros Ley
        19.764/01
      </td>
      <td class="celda-codigo">
        591
      </td>
      <td>
        <input
          v-model.lazy="datos.cod591"
          type="text"
          class="f29__input"
          maxlength="12"
          :disabled="!editable"
        >
      </td>
      <td class="celda-signo" />
    </tr>
  </table>
</template>

<script lang="ts">
import store from "@/store/f29.module";
import { defineComponent } from "vue";

export default defineComponent({
  props: ['editable'],
  setup() {
    const datos = store.state;

    return {
      datos,
    };
  },
});
</script>
