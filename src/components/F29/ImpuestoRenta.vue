<template>
  <table>
    <tbody>
      <tr>
        <td class="celda-linea">
          49
        </td>
        <td colspan="12">
          Restituci&oacute;n de devoluci&oacute;n por concepto de Art. 27 ter
          D.L. 825, de 1974, inc. 2° (Ley N°20.720)
        </td>
        <td class="celda-codigo">
          760
        </td>
        <td>
          <input
            v-model.lazy="datos.cod760"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-signo">
          +
        </td>
      </tr>

      <tr>
        <td class="celda-linea">
          50
        </td>
        <th
          rowspan="9"
          class="vertical-header"
        >
          Retenciones
        </th>
        <td colspan="11">
          Retenci&oacute;n Impuesto Primera Categor&iacute;a por rentas de
          capitales mobiliarios del Art.20 N°2, seg&uacute;n Art. 73 LIR
        </td>
        <td class="celda-codigo">
          50
        </td>
        <td>
          <input
            v-model.lazy="datos.cod50"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-signo">
          +
        </td>
      </tr>

      <tr>
        <td class="celda-linea">
          51
        </td>
        <td colspan="11">
          <table class="f29__seccion__subtabla">
            <tr>
              <td rowspan="2">
                Renteci&oacute;n Impuesto &Uacute;nico a los Trabajadores,
                seg&uacute;n Art. 74 N° 1 LIR
              </td>
              <td
                rowspan="2"
                style="width: 100px; text-align: center"
              >
                Cr&eacute;ditos
              </td>
              <td
                rowspan="2"
                class="celda-codigo"
              >
                751
              </td>
              <td>Donaci&oacute;n Art. 8 Ley 18.895</td>
              <td
                rowspan="2"
                class="celda-codigo"
              >
                735
              </td>
              <td colspan="2">
                Donaci&oacute;n Ley 20.444/2010
              </td>
              <td
                rowspan="2"
                colspan="5"
              >
                Impuesto &Uacute;nico 2da. Categor&iacute;a a Pagar
              </td>
            </tr>
            <tr style="border-top: 1px solid">
              <td>
                <input
                  v-model.lazy="datos.cod751"
                  type="text"
                  class="f29__input"
                  maxlength="12"
                  :disabled="!editable"
                >
              </td>
              <td>
                <input
                  v-model.lazy="datos.cod735"
                  type="text"
                  class="f29__input"
                  maxlength="12"
                  :disabled="!editable"
                >
              </td>
            </tr>
          </table>
        </td>
        <td class="celda-codigo">
          48
        </td>
        <td>
          <input
            v-model.lazy="datos.cod48"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-signo">
          +
        </td>
      </tr>

      <tr>
        <td class="celda-linea">
          52
        </td>
        <td colspan="11">
          Retenci&oacute;n de Impuesto con tasa del 10% sobre las rentas del
          Art. 42 N°2, seg&uacute;n Art. 74 N°2 LIR
        </td>
        <td class="celda-codigo">
          151
        </td>
        <td>
          <input
            v-model.lazy="datos.cod151"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-signo">
          +
        </td>
      </tr>
      <tr>
        <td class="celda-linea">
          53
        </td>
        <td colspan="11">
          Retenci&oacute;n de Impuesto con tasa del 10% sobre las rentas del
          Art. 48, seg&uacute;n Art. 74 N°3 LIR
        </td>
        <td class="celda-codigo">
          153
        </td>
        <td>
          <input
            v-model.lazy="datos.cod153"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-signo">
          +
        </td>
      </tr>
      <tr>
        <td class="celda-linea">
          54
        </td>
        <td colspan="11">
          Retenci&oacute;n a Suplementeros, seg&uacute;n Art. 74 N°5 (tasa 0,5%)
          LIR
        </td>
        <td class="celda-codigo">
          54
        </td>
        <td>
          <input
            v-model.lazy="datos.cod54"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-signo">
          +
        </td>
      </tr>
      <tr>
        <td class="celda-linea">
          55
        </td>
        <td colspan="11">
          Retenci&oacute;n por compra de productos mineros, seg&uacute;n Art. 74
          N°6 LIR
        </td>
        <td class="celda-codigo">
          56
        </td>
        <td>
          <input
            v-model.lazy="datos.cod56"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-signo">
          +
        </td>
      </tr>
      <tr>
        <td class="celda-linea">
          56
        </td>
        <td colspan="11">
          Retenci&oacute;n sobre cantidades pagadas en cumplimiento de Seguros
          Dotales del Art. 17, N°3 (tasa 15%)
        </td>
        <td class="celda-codigo">
          588
        </td>
        <td>
          <input
            v-model.lazy="datos.cod588"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-signo">
          +
        </td>
      </tr>
      <tr>
        <td class="celda-linea">
          57
        </td>
        <td colspan="11">
          Retenci&oacute;n sobre retiros de Ahorro Previsional Voluntario del
          Art. 42 bis LIR (tasa 15%)
        </td>
        <td class="celda-codigo">
          589
        </td>
        <td>
          <input
            v-model.lazy="datos.cod589"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-signo">
          +
        </td>
      </tr>

      <!-- SUBHEADERS -->
      <tr class="f29__seccion__subheader">
        <th />
        <th />
        <th colspan="2">
          Acogido a suspensión PPM (Art 1º bis Ley 19.420 y 1º bis Ley 19.606)
        </th>
        <th colspan="2">
          Monto P&eacute;rdida Art. 90
        </th>
        <th colspan="2">
          Base Imponible
        </th>
        <th colspan="2">
          Tasa (%)
        </th>
        <th colspan="2">
          Crédito/Tope Suspensión PPM (Arts. 1º bis Leyes 19.420 y 19.606)
        </th>
        <th colspan="3">
          PPM Neto Determinado
        </th>
      </tr>
      <!-- FIN SUBHEADERS -->
      <tr>
        <td class="celda-linea">
          58
        </td>
        <th
          rowspan="8"
          class="vertical-header"
        >
          PPM
        </th>
        <td>1a categor&iacute;a Art. 84 a)</td>
        <td class="celda-codigo">
          750
        </td>
        <td style="text-align: center">
          <input
            v-model="datos.cod750"
            type="checkbox"
            :disabled="!editable"
          >
        </td>
        <td class="celda-codigo">
          30
        </td>
        <td>
          <input
            v-model.lazy="datos.cod30"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-codigo">
          563
        </td>
        <td>
          <input
            v-model.lazy="datos.cod563"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-codigo">
          115
        </td>
        <td>
          <input
            v-model.lazy="cod115"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-codigo">
          68
        </td>
        <td>
          <input
            v-model.lazy="cod68"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-codigo">
          62
        </td>
        <td>
          <input
            :value="cod62"
            type="text"
            class="f29__input"
            maxlength="12"
            disabled
          >
        </td>
        <td class="celda-signo">
          +
        </td>
      </tr>

      <tr>
        <td class="celda-linea">
          59
        </td>
        <td colspan="3">
          Mineros Art. 84 a)
        </td>
        <td class="celda-codigo">
          565
        </td>
        <td>
          <input
            v-model.lazy="datos.cod565"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-codigo">
          120
        </td>
        <td>
          <input
            v-model.lazy="datos.cod120"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-codigo">
          542
        </td>
        <td>
          <input
            v-model.lazy="datos.cod542"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-codigo">
          122
        </td>
        <td>
          <input
            v-model.lazy="datos.cod122"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-codigo">
          123
        </td>
        <td>
          <input
            v-model.lazy="datos.cod123"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-signo">
          +
        </td>
      </tr>

      <tr>
        <td class="celda-linea">
          60
        </td>
        <td colspan="3">
          Explotador Minero Art. 84 h)
        </td>
        <td class="celda-codigo">
          700
        </td>
        <td>
          <input
            v-model.lazy="datos.cod700"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-codigo">
          701
        </td>
        <td>
          <input
            v-model.lazy="datos.cod701"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-codigo">
          702
        </td>
        <td>
          <input
            v-model.lazy="datos.cod702"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-codigo">
          711
        </td>
        <td>
          <input
            v-model.lazy="datos.cod711"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-codigo">
          703
        </td>
        <td>
          <input
            v-model.lazy="datos.cod703"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-signo">
          +
        </td>
      </tr>

      <tr>
        <td class="celda-linea">
          61
        </td>
        <td colspan="11">
          Transportistas acogidos a Renta Presunta, Art. 84, e) y f) (tasa de
          0,3%)
        </td>
        <td class="celda-codigo">
          66
        </td>
        <td>
          <input
            v-model.lazy="datos.cod66"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-signo">
          +
        </td>
      </tr>

      <tr>
        <td
          rowspan="2"
          class="celda-linea"
        >
          62
        </td>
        <td
          rowspan="2"
          colspan="3"
        >
          Cr&eacute;dito Capacitaci&oacute;n, Ley 19.518/97
        </td>
        <td colspan="2">
          Cr&eacute;dito del Mes
        </td>
        <td colspan="2">
          Remanente mes anterior
        </td>
        <td colspan="2">
          Remanente per&iacute;odo siguiente
        </td>
        <td colspan="5" />
      </tr>

      <tr>
        <td class="celda-codigo">
          721
        </td>
        <td>
          <input
            v-model.lazy="datos.cod721"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-codigo">
          722
        </td>
        <td>
          <input
            v-model.lazy="datos.cod722"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-codigo">
          724
        </td>
        <td>
          <input
            v-model.lazy="datos.cod724"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td colspan="2">
          Cr&eacute;dito a imputar
        </td>
        <td class="celda-codigo">
          723
        </td>
        <td>
          <input
            v-model.lazy="datos.cod723"
            type="text"
            class="f29__input"
            disabled
          >
        </td>
        <td class="celda-signo">
          -
        </td>
      </tr>

      <tr>
        <td class="celda-linea">
          63
        </td>
        <td colspan="11">
          2ds Categor&iacute;a Art. 84 b) (tasa 10%)
        </td>
        <td class="celda-codigo">
          152
        </td>
        <td>
          <input
            v-model.lazy="datos.cod152"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-signo">
          +
        </td>
      </tr>

      <tr>
        <td class="celda-linea">
          64
        </td>
        <td colspan="11">
          Taller artesanal Art. 84 c) (tasa 1,5% o 3%)
        </td>
        <td class="celda-codigo">
          70
        </td>
        <td>
          <input
            v-model.lazy="datos.cod70"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
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
import store from "@/store/f29.module";
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
    cod62(): string {
      let subTotal = Math.round(this.datos.cod563 * this.datos.cod115)
      if (this.datos.cod68 < subTotal) {
        subTotal -= this.datos.cod68
      } else {
        subTotal = 0
      }
      this.store.setValue('cod62', subTotal);
      return parseNumber(subTotal)
    },
    cod115: {
      get(): string {
        return (this.datos.cod115 * 100).toString()
      },
      set(nuevoValor: string) {
        const valNormalizado = parseFloat(nuevoValor.split(',').join('.'))/100
        this.store.setValue('cod115', valNormalizado)
      }
    }
    ,
    cod68: {
      get(): number {
        return this.datos.cod68
      },
      set(nuevoValor: string) {
        this.store.setValue('cod68', Math.round(parseInt(nuevoValor)))
        console.log(this.datos.cod68)
      }
    }
  }
});
</script>
