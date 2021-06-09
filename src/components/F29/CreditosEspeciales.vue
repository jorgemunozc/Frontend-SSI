<template>
  <table>
    <tbody>
      <tr>
        <td class="celda-linea">
          108
        </td>
        <td colspan="3">
          Cr&eacute;dito por Sistemas Solares T&eacute;rmicos, Ley N°20.365
        </td>
        <td class="celda-codigo">
          725
        </td>
        <td>
          <input
            v-model.lazy="datos.cod725"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td colspan="2">
          Remanente mes anterior
        </td>
        <td class="celda-codigo">
          737
        </td>
        <td>
          <input
            v-model.lazy="datos.cod737"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td colspan="2">
          Total Cr&eacute;dito
        </td>
        <td class="celda-codigo">
          727
        </td>
        <td class="f29__input-wrapper">
          <input
            type="text"
            class="f29__input"
            :value="cod727"
            disabled
          >
        </td>
        <td class="celda-signo">
          -
        </td>
      </tr>
      <tr>
        <td class="celda-linea">
          109
        </td>
        <td colspan="3">
          Imputaci&oacute;n del Pago Patente Aguas Ley N°20.017
        </td>
        <td class="celda-codigo">
          704
        </td>
        <td>
          <input
            v-model.lazy="datos.cod704"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td colspan="2">
          Remanente mes anterior
        </td>
        <td class="celda-codigo">
          705
        </td>
        <td>
          <input
            v-model.lazy="datos.cod705"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td colspan="2">
          Total Cr&eacute;dito
        </td>
        <td class="celda-codigo">
          706
        </td>
        <td>
          <input
            type="text"
            class="f29__input"
            :value="cod706"
            disabled
          >
        </td>
        <td class="celda-signo">
          -
        </td>
      </tr>
      <tr>
        <td class="celda-linea">
          110
        </td>
        <td colspan="3">
          Cotizaci&oacute;n Adicional Ley N° 18.566
        </td>
        <td class="celda-codigo">
          169
        </td>
        <td>
          <input
            v-model.lazy="datos.cod169"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td colspan="2">
          Remanente mes anterior
        </td>
        <td class="celda-codigo">
          161
        </td>
        <td>
          <input
            v-model.lazy="datos.cod161"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td colspan="2">
          Total Cr&eacute;dito
        </td>
        <td class="celda-codigo">
          570
        </td>
        <td>
          <input
            type="text"
            class="f29__input"
            :value="cod570"
            disabled
          >
        </td>
        <td class="celda-signo">
          -
        </td>
      </tr>
      <tr>
        <td class="celda-linea">
          111
        </td>
        <td colspan="3">
          Cr&eacute;dito Especial Empresas Constructoras
        </td>
        <td class="celda-codigo">
          126
        </td>
        <td>
          <input
            v-model.lazy="datos.cod126"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td colspan="2">
          Remanente mes anterior
        </td>
        <td class="celda-codigo">
          128
        </td>
        <td>
          <input
            v-model.lazy="datos.cod128"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td colspan="2">
          Total Cr&eacute;dito
        </td>
        <td class="celda-codigo">
          571
        </td>
        <td>
          <input
            type="text"
            class="f29__input"
            :value="cod571"
            disabled
          >
        </td>
        <td class="celda-signo">
          -
        </td>
      </tr>
      <tr>
        <td class="celda-linea">
          112
        </td>
        <td colspan="3">
          Recup. peaje transportistas pasajeros, Ley N° 19.764
        </td>
        <td class="celda-codigo">
          572
        </td>
        <td>
          <input
            v-model.lazy="datos.cod572"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td colspan="2">
          Remanente mes anterior
        </td>
        <td class="celda-codigo">
          568
        </td>
        <td>
          <input
            v-model.lazy="datos.cod568"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td colspan="2">
          Total Cr&eacute;dito
        </td>
        <td class="celda-codigo">
          590
        </td>
        <td>
          <input
            type="text"
            class="f29__input"
            :value="cod590"
            disabled
          >
        </td>
        <td class="celda-signo">
          -
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import store from '@/store'
import { parseNumber } from '@/utils/numbers';
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const datos = store.state;

    return {
      datos,
    }
  },
  computed: {
    cod727(): string {
      store.calcularTotal(['cod725', 'cod737'], [], 'cod727');
      return parseNumber(this.datos.cod727);
    },

    cod706(): string {
      store.calcularTotal(['cod704', 'cod705'], [], 'cod706');
      return parseNumber(this.datos.cod706);
    },

    cod570(): string {
      store.calcularTotal(['cod169', 'cod161'], [], 'cod570');
      return parseNumber(this.datos.cod570);
    },

    cod571(): string {
      store.calcularTotal(['cod126', 'cod128'], [], 'cod571');
      return parseNumber(this.datos.cod571);
    },

    cod590(): string {
      store.calcularTotal(['cod572', 'cod568'], [], 'cod590');
      return parseNumber(this.datos.cod590);
    }
  }
})
</script>
