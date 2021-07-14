<template>
  <table>
    <tr>
      <td class="celda-linea">
        65
      </td>
      <th>
        SUB TOTAL IMPUESTO DETERMINADO ANVERSO (Suma de las l&iacute;neas 49 a
        64, columna Impuesto y/o PPM determinado)
      </th>
      <td class="celda-codigo">
        595
      </td>
      <td class="f29__input-wrapper">
        <input
          type="text"
          class="f29__input"
          :value="cod595"
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
import store from "@/store";
import { parseNumber } from "@/utils/numbers";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    let datos = store.state;
    return {
      datos,
      store,
    };
  },

  computed: {
    cod595(): string {
      store.calcularSubImpDeterm();
      let cod595 = this.datos.cod595;
      return parseNumber(cod595);
    },
  },
});
</script>
