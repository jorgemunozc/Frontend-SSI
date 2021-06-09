<template>
  <table>
    <tr>
      <td class="celda-linea">113</td>
      <td>TOTAL DETERMINADO</td>
      <td class="celda-codigo">547</td>
      <td class="f29__input-wrapper">
        <input type="text" class="f29__input" :value="cod547" disabled />
      </td>
      <td class="celda-signo">=</td>
    </tr>
  </table>
</template>

<script lang="ts">
import store from "@/store";
import { parseNumber } from "@/utils/numbers";
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    cod547(): string {
      const codigos = [
        "cod409",
        "cod522",
        "cod526",
        "cod550",
        "cod506",
        "cod598",
        "cod596",
        "cod727",
        "cod706",
        "cod570",
        "cod571",
        "cod590",
        "cod595",
      ];

      const codigosConResta = [
        "cod598",
        "cod727",
        "cod706",
        "cod570",
        "cod571",
        "cod590",
      ];

      store.calcularTotal(codigos, codigosConResta, "cod547");
      return parseNumber(store.state.cod547);
    },
  },
});
</script>
