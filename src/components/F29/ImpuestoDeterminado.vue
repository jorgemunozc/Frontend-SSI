<template>
  <table>
    <tbody>
      <tr class="f29__seccion__subheader">
        <th colspan="8">
          IMPUESTO DETERMINADO
        </th>
      </tr>
      <tr>
        <td class="celda-linea">
          48
        </td>
        <td>
          Remanente de cr&eacute;dito fiscal para el per&iacute;odo siguiente
        </td>
        <td class="celda-codigo">
          77
        </td>
        <td class="f29__input-wrapper">
          <input
            type="text"
            class="f29__input"
            :value="cod77"
            disabled
          >
        </td>
        <td>IVA determinado</td>
        <td class="celda-codigo">
          89
        </td>
        <td class="f29__input-wrapper">
          <input
            type="text"
            class="f29__input"
            :value="cod89"
            disabled
          >
        </td>
        <td class="celda-signo">
          +
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store/f29.module";
import { parseNumber } from "@/utils/numbers";

export default defineComponent({
  setup() {
    const datos = store.state;

    return {
      datos,
      store,
    };
  },

  computed: {
    impuestoParcial(): number {
      return store.calcularImpuestoParcial();
    },

    cod77(): string {
      let cod77 = 0;
      if (this.impuestoParcial < 0) {
        cod77 = this.impuestoParcial * -1;
      }
      store.setValue("cod77", cod77);
      return parseNumber(cod77);
    },

    cod89(): string {
      let cod89 = 0;
      if (this.impuestoParcial > 0) {
        cod89 = this.impuestoParcial;
      }
      store.setValue("cod89", cod89);
      return parseNumber(cod89);
    },
  },
});
</script>
