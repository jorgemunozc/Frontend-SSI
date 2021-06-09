<template>
  <table>
    <tr>
      <td class="celda-linea">
        119
      </td>
      <td colspan="12">
        TOTAL A PAGAR DENTRO DEL PLAZO LEGAL
      </td>
      <td class="celda-codigo">
        91
      </td>
      <td class="f29__input-wrapper">
        <input
          type="text"
          class="f29__input"
          :value="cod91"
          disabled
        >
      </td>
      <td class="celda-signo">
        =
      </td>
    </tr>
    <tr>
      <td class="celda-linea">
        120
      </td>
      <td colspan="12">
        M&aacute;s IPC
      </td>
      <td class="celda-codigo">
        92
      </td>
      <td>
        <input
          type="text"
          class="f29__input"
          :value="cod92"
          disabled
        >
      </td>
      <td class="celda-signo">
        +
      </td>
    </tr>
    <tr>
      <td class="celda-linea">
        121
      </td>
      <td colspan="12">
        M&aacute;s Intereses y multas
      </td>
      <td class="celda-codigo">
        93
      </td>
      <td>
        <input
          type="text"
          class="f29__input"
          :value="cod93"
          disabled
        >
      </td>
      <td class="celda-signo">
        +
      </td>
    </tr>
    <tr>
      <td class="celda-linea">
        122
      </td>
      <td colspan="12">
        TOTAL A PAGAR CON RECARGO
      </td>
      <td class="celda-codigo">
        94
      </td>
      <td>
        <input
          type="text"
          class="f29__input"
          :value="cod94"
          disabled
        >
      </td>
      <td class="celda-signo">
        =
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";
import { parseNumber } from "@/utils/numbers";

export default defineComponent({
  computed: {
    cod91(): string {
      let cod91 = 0;
      const cod547 = store.state.cod547;
      if (cod547 > 0) {
        cod91 = cod547;
      }
      store.setValue("cod91", cod91);
      return parseNumber(store.state.cod91);
    },

    cod92(): string {
      return parseNumber(store.state.cod92);
    },

    cod93(): string {
      return parseNumber(store.state.cod93);
    },

    cod94(): string {
      store.calcularTotal(["cod91", "cod92", "cod93"], [], "cod94");
      return parseNumber(store.state.cod94);
    },
  },
});
</script>
