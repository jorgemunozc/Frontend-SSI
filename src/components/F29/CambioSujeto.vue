<template>
  <table>
    <thead>
      <tr>
        <th colspan="16">
          ANTICIPO CAMBIO DE SUJETO (CONTRIBUYENTES RETENIDOS)
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="celda-linea">
          98
        </td>
        <td colspan="12">
          IVA anticipado del per&iacute;odo
        </td>
        <td class="celda-codigo">
          556
        </td>
        <td class="f29__input-wrapper">
          <input
            v-model.lazy="datos.cod556"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td class="celda-signo">
          +
        </td>
      </tr>

      <tr>
        <td class="celda-linea">
          99
        </td>
        <td colspan="12">
          Remanente del mes anterior
        </td>
        <td class="celda-codigo">
          557
        </td>
        <td>
          <input
            v-model.lazy="datos.cod557"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td class="celda-signo">
          +
        </td>
      </tr>

      <tr>
        <td class="celda-linea">
          100
        </td>
        <td colspan="12">
          Devoluci&oacute;n del mes anterior
        </td>
        <td class="celda-codigo">
          558
        </td>
        <td>
          <input
            v-model.lazy="datos.cod558"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td class="celda-signo">
          -
        </td>
      </tr>

      <tr>
        <td class="celda-linea">
          101
        </td>
        <td colspan="12">
          Total de Anticipo
        </td>
        <td class="celda-codigo">
          543
        </td>
        <td>
          <input
            type="text"
            class="f29__input"
            :value="cod543"
            disabled
          >
        </td>
        <td class="celda-signo">
          =
        </td>
      </tr>

      <tr class="f29__fila-vacia" />
      <tr>
        <td class="celda-linea">
          102
        </td>
        <td colspan="8">
          Remanente Anticipos Cambio Sujeto para per&iacute;odo siguiente
        </td>
        <td class="celda-codigo">
          573
        </td>
        <td class="f29__input-wrapper">
          <input
            type="text"
            class="f29__input"
            :value="cod573"
            disabled
          >
        </td>
        <td class="celda-signo" />
        <td>Anticipo a imputar</td>
        <td class="celda-codigo">
          598
        </td>
        <td>
          <input
            type="text"
            class="f29__input"
            :value="cod598"
            disabled
          >
        </td>
        <td class="celda-signo">
          -
        </td>
      </tr>

      <tr class="f29__fila-vacia" />
      <tr>
        <td class="celda-linea">
          103
        </td>
        <td colspan="8">
          IVA total retenido a terceros (tasa Art. 14 D.L. 825)
        </td>
        <td class="celda-codigo">
          39
        </td>
        <td>
          <input
            v-model.lazy="datos.cod39"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td class="celda-signo">
          +
        </td>
      </tr>
      <tr>
        <td class="celda-linea">
          104
        </td>
        <td colspan="8">
          IVA parcial retenido a terceros (seg&uacute;n tasa)
        </td>
        <td class="celda-codigo">
          554
        </td>
        <td>
          <input
            v-model.lazy="datos.cod554"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td class="celda-signo">
          +
        </td>
      </tr>
      <tr>
        <td class="celda-linea">
          105
        </td>
        <td colspan="8">
          IVA Retenido por notas de cr&eacute;dito emitidas
        </td>
        <td class="celda-codigo">
          736
        </td>
        <td>
          <input
            v-model.lazy="datos.cod736"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td class="celda-signo">
          -
        </td>
      </tr>
      <tr>
        <td class="celda-linea">
          106
        </td>
        <td colspan="8">
          Retenci&oacute;n de margen de comercializaci&oacute;n
        </td>
        <td class="celda-codigo">
          597
        </td>
        <td>
          <input
            v-model.lazy="datos.cod597"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td class="celda-signo">
          +
        </td>
        <!-- <td colspan="4"></td> -->
      </tr>

      <tr>
        <td class="celda-linea">
          107
        </td>
        <td colspan="8">
          Retenci&oacute;n Anticipo de Cambio de Sujeto
        </td>
        <td class="celda-codigo">
          555
        </td>
        <td>
          <input
            v-model.lazy="datos.cod555"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td class="celda-signo">
          +
        </td>
        <td>Retenci&oacute;n Cambio de Sujeto</td>
        <td class="celda-codigo">
          596
        </td>
        <td>
          <input
            type="text"
            class="f29__input"
            :value="cod596"
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
  setup() {
    const datos = store.state;

    return {
      datos,
    };
  },

  computed: {
    cod543(): string {
      let total = +this.datos.cod556 + +this.datos.cod557 - +this.datos.cod558;
      store.setValue("cod543", total);
      return parseNumber(total);
    },

    cod598(): string {
      let cod543 = +this.datos.cod543;
      let cod89 = +this.datos.cod89;
      let cod598 = 0;
      if (cod543 > cod89) {
        cod598 = cod89;
      } else {
        cod598 = cod543;
      }
      store.setValue("cod598", cod598);
      return parseNumber(this.datos.cod598);
    },

    cod573(): string {
      let cod543 = +this.datos.cod543;
      let cod89 = +this.datos.cod89;
      let cod573 = 0;
      if (cod543 > cod89) {
        cod573 = cod543 - cod89;
      }
      store.setValue("cod573", cod573);
      return parseNumber(this.datos.cod573);
    },

    cod596(): string {
      const codigos = ["cod39", "cod554", "cod736", "cod597", "cod555"];

      const codigosConResta = ["cod736"];
      store.calcularTotal(codigos, codigosConResta, "cod596");
      return parseNumber(this.datos.cod596);
    },
  },
});
</script>
