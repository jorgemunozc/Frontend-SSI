<template>
  <table>
    <thead class="f29__seccion__subheader">
      <tr>
        <th colspan="13">
          SISTEMA DE TRIBUTACI&Oacute;N SIMPLIFICADA DEL IVA. ART. 29 D.L. 825
        </th>
        <th colspan="3">
          IMPUESTO DETERMINADO
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="celda-linea">
          66
        </td>
        <td colspan="12">
          Ventas del per&iacute;odo
        </td>
        <td class="celda-codigo">
          529
        </td>
        <td colspan="2">
          <input
            v-model.lazy="datos.cod529"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
      </tr>

      <tr>
        <td class="celda-linea">
          67
        </td>
        <td colspan="12">
          Cr&eacute;dito del per&iacute;odo
        </td>
        <td class="celda-codigo">
          530
        </td>
        <td colspan="2">
          <input
            v-model.lazy.number="datos.cod530"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
      </tr>

      <tr>
        <td class="celda-linea">
          68
        </td>
        <td colspan="12">
          IVA determinado por concepto de Tributaci&oacute;n Simplificada
        </td>
        <td class="celda-codigo">
          409
        </td>
        <td class="f29__input-wrapper">
          <input
            type="text"
            class="f29__input"
            :value="cod409"
            maxlength="12"
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
import store from "@/store";
import { parseNumber } from "@/utils/numbers";
import { defineComponent } from "vue";

export default defineComponent({
  props: ['editable'],
  setup() {
    const datos = store.state;
    return {
      datos,
      store,
    };
  },

  computed: {
    cod409(): string {
      const cod409 = +this.datos.cod529 - +this.datos.cod530;
      this.store.setValue("cod409", cod409);
      return parseNumber(cod409);
    },
  },
});
</script>
