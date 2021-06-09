<template>
  <table>
    <tbody>
      <tr>
        <th colspan="13"></th>
        <th colspan="3">D&eacute;bitos</th>
      </tr>

      <tr>
        <td class="celda-linea">77</td>
        <td colspan="12">Pisco, Licores, Whisky y Aguardiente (tasa 31,5%)</td>
        <td class="celda-codigo">577</td>
        <td class="f29__input-wrapper">
          <input
            type="text"
            class="f29__input"
            v-model.lazy="datos.cod577"
            maxlength="12"
          />
        </td>
        <td class="celda-signo">+</td>
      </tr>

      <tr>
        <td class="celda-linea">78</td>
        <td colspan="12">Vinos, Champaña, Chichas (tasa 20,5%)</td>
        <td class="celda-codigo">32</td>
        <td>
          <input
            type="text"
            class="f29__input"
            v-model.lazy="datos.cod32"
            maxlength="12"
          />
        </td>
        <td class="celda-signo">+</td>
      </tr>
      <tr>
        <td class="celda-linea">79</td>
        <td colspan="12">Cervezas (tasa 20,5%)</td>
        <td class="celda-codigo">150</td>
        <td>
          <input
            type="text"
            class="f29__input"
            v-model.lazy="datos.cod150"
            maxlength="12"
          />
        </td>
        <td class="celda-signo">+</td>
      </tr>
      <tr>
        <td class="celda-linea">80</td>
        <td colspan="12">Bebidas analcoh&oacute;licas (tasa 10%)</td>
        <td class="celda-codigo">146</td>
        <td>
          <input
            type="text"
            class="f29__input"
            v-model.lazy="datos.cod146"
            maxlength="12"
          />
        </td>
        <td class="celda-signo">+</td>
      </tr>
      <tr>
        <td class="celda-linea">81</td>
        <td colspan="12">
          Bebidas analacoh&oacute;licas elevado contenido az&uacute;cares (tasa
          18%)
        </td>
        <td class="celda-codigo">752</td>
        <td>
          <input
            type="text"
            class="f29__input"
            v-model.lazy="datos.cod752"
            maxlength="12"
          />
        </td>
        <td class="celda-signo">+</td>
      </tr>
      <tr>
        <td class="celda-linea">82</td>
        <td colspan="12">Notas D&eacute;bitos emitidos</td>
        <td class="celda-codigo">545</td>
        <td>
          <input
            type="text"
            class="f29__input"
            v-model.lazy="datos.cod545"
            maxlength="12"
          />
        </td>
        <td class="celda-signo">+</td>
      </tr>
      <tr>
        <td class="celda-linea">83</td>
        <td colspan="12">Notas Cr&eacute;ditos emitidas Facturas</td>
        <td class="celda-codigo">546</td>
        <td>
          <input
            type="text"
            class="f29__input"
            v-model.lazy="datos.cod546"
            maxlength="12"
          />
        </td>
        <td class="celda-signo">-</td>
      </tr>
      <tr>
        <td class="celda-linea">84</td>
        <td colspan="12">
          Notas Cr&eacute;ditos emitidas por Vales de m&aacute;quinas
          autorizadas por el Servicio
        </td>
        <td class="celda-codigo">710</td>
        <td>
          <input
            type="text"
            class="f29__input"
            v-model.lazy="datos.cod710"
            maxlength="12"
          />
        </td>
        <td class="celda-signo">-</td>
      </tr>
      <tr>
        <td class="celda-linea">85</td>
        <td colspan="12">Total D&eacute;bitos Art. 42 D.L. 825</td>
        <td class="celda-codigo">602</td>
        <td>
          <input
            type="text"
            class="f29__input"
            :value="cod602"
            maxlength="12"
            disabled
          />
        </td>
        <td class="celda-signo">=</td>
      </tr>

      <tr class=""></tr>

      <tr class="f29__seccion__subheader">
        <td colspan="10"></td>
        <th colspan="3">
          Total cr&eacute;dito recargado en facturas recibidas
        </th>
        <th colspan="3">Cr&eacute;dito imputable del per&iacute;odo</th>
      </tr>

      <tr>
        <td class="celda-linea">86</td>
        <td colspan="9">Pisco, Licores, Whisky y Aguardiente (tasa 31,5%)</td>
        <td class="celda-codigo">575</td>
        <td class="f29__input-wrapper">
          <input
            type="text"
            class="f29__input"
            v-model.lazy="datos.cod575"
            maxlength="12"
          />
        </td>
        <td class="celda-signo"></td>
        <td class="celda-codigo">576</td>
        <td>
          <input
            type="text"
            class="f29__input"
            v-model.lazy="datos.cod576"
            maxlength="12"
          />
        </td>
        <td class="celda-signo">+</td>
      </tr>
      <tr>
        <td class="celda-linea">87</td>
        <td colspan="9">Vinos, Champaña, Chichas (tasa 20,5%)</td>
        <td class="celda-codigo">574</td>
        <td>
          <input
            type="text"
            class="f29__input"
            v-model.lazy="datos.cod574"
            maxlength="12"
          />
        </td>
        <td class="celda-signo"></td>
        <td class="celda-codigo">33</td>
        <td>
          <input
            type="text"
            class="f29__input"
            v-model.lazy="datos.cod33"
            maxlength="12"
          />
        </td>
        <td class="celda-signo">+</td>
      </tr>
      <tr>
        <td class="celda-linea">88</td>
        <td colspan="9">Cervezas (tasa 20,5%)</td>
        <td class="celda-codigo">580</td>
        <td>
          <input
            type="text"
            class="f29__input"
            v-model.lazy="datos.cod580"
            maxlength="12"
          />
        </td>
        <td class="celda-signo"></td>
        <td class="celda-codigo">149</td>
        <td>
          <input
            type="text"
            class="f29__input"
            v-model.lazy="datos.cod149"
            maxlength="12"
          />
        </td>
        <td class="celda-signo">+</td>
      </tr>
      <tr>
        <td class="celda-linea">89</td>
        <td colspan="9">Bebidas analacoh&oacute;licas (tasa 10%)</td>
        <td class="celda-codigo">582</td>
        <td>
          <input
            type="text"
            class="f29__input"
            v-model.lazy="datos.cod582"
            maxlength="12"
          />
        </td>
        <td class="celda-signo"></td>
        <td class="celda-codigo">85</td>
        <td>
          <input
            type="text"
            class="f29__input"
            v-model.lazy="datos.cod85"
            maxlength="12"
          />
        </td>
        <td class="celda-signo">+</td>
      </tr>
      <tr>
        <td class="celda-linea">90</td>
        <td colspan="9">
          Bebidas analcoh&oacute;licas elevado contenido az&uacute;cares (tasa
          18%)
        </td>
        <td class="celda-codigo">753</td>
        <td>
          <input
            type="text"
            class="f29__input"
            v-model.lazy="datos.cod753"
            maxlength="12"
          />
        </td>
        <td class="celda-signo"></td>
        <td class="celda-codigo">754</td>
        <td>
          <input
            type="text"
            class="f29__input"
            v-model.lazy="datos.cod754"
            maxlength="12"
          />
        </td>
        <td class="celda-signo">+</td>
      </tr>

      <tr>
        <td class="celda-linea">91</td>
        <td colspan="12">Notas D&eacute;bito recibidas</td>
        <td class="celda-codigo">551</td>
        <td>
          <input
            type="text"
            class="f29__input"
            v-model.lazy="datos.cod551"
            maxlength="12"
          />
        </td>
        <td class="celda-signo">+</td>
      </tr>
      <tr>
        <td class="celda-linea">92</td>
        <td colspan="12">Notas Cr&eacute;dito recibidas</td>
        <td class="celda-codigo">559</td>
        <td>
          <input
            type="text"
            class="f29__input"
            v-model.lazy="datos.cod559"
            maxlength="12"
          />
        </td>
        <td class="celda-signo">-</td>
      </tr>
      <tr>
        <td class="celda-linea">93</td>
        <td colspan="12">Remanente Cr&eacute;dito Art. 42 mes anterior</td>
        <td class="celda-codigo">508</td>
        <td>
          <input
            type="text"
            class="f29__input"
            v-model.lazy="datos.cod508"
            maxlength="12"
          />
        </td>
        <td class="celda-signo">+</td>
      </tr>
      <tr>
        <td class="celda-linea">94</td>
        <td colspan="12">
          Devoluci&oacute;n Art. 36 D.L. 825 relativas impuesto Art. 42
        </td>
        <td class="celda-codigo">533</td>
        <td>
          <input
            type="text"
            class="f29__input"
            v-model.lazy="datos.cod533"
            maxlength="12"
          />
        </td>
        <td class="celda-signo">-</td>
      </tr>
      <tr>
        <td class="celda-linea">95</td>
        <td colspan="12">
          Monto reintegrado devoluciones indebidas de cr&eacute;dito por
          exportaciones
        </td>
        <td class="celda-codigo">552</td>
        <td>
          <input
            type="text"
            class="f29__input"
            v-model.lazy="datos.cod552"
            maxlength="12"
          />
        </td>
        <td class="celda-signo">+</td>
      </tr>
      <tr>
        <td class="celda-linea">96</td>
        <td colspan="12">Total Cr&eacute;ditos Art. 42 D.L. 825</td>
        <td class="celda-codigo">603</td>
        <td>
          <input
            type="text"
            class="f29__input"
            :value="cod603"
            maxlength="12"
            disabled
          />
        </td>
        <td class="celda-signo">=</td>
      </tr>

      <tr class="f29__fila-vacia"></tr>

      <tr>
        <td class="celda-linea">97</td>
        <td colspan="9">
          Remanente Cr&eacute;dito Impuesto Adic. Art. 42 para per&iacute;odo
          siguiente
        </td>
        <td class="celda-codigo">507</td>
        <td>
          <input
            type="text"
            class="f29__input"
            :value="cod507"
            maxlength="12"
            disabled
          />
        </td>
        <td>Impuesto Art. 42 determinado</td>
        <td class="celda-codigo">506</td>
        <td>
          <input
            type="text"
            class="f29__input"
            :value="cod506"
            maxlength="12"
            disabled
          />
        </td>
        <td class="celda-signo">+</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import store from "@/store";
import { parseNumber } from "@/utils/numbers";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const datos = store.state;

    return {
      datos,
    };
  },

  computed: {
    cod602(): string {
      const codigos = [
        "cod577",
        "cod32",
        "cod150",
        "cod146",
        "cod752",
        "cod545",
        "cod546",
        "cod710",
      ];

      const codigosConResta = ["cod546", "cod710"];
      const total = +store.calcularTotal(codigos, codigosConResta);
      store.setValue("cod602", total);
      return parseNumber(total);
    },

    cod603(): string {
      const codigos = [
        "cod576",
        "cod33",
        "cod149",
        "cod85",
        "cod754",
        "cod551",
        "cod559",
        "cod508",
        "cod533",
        "cod552",
      ];

      const codigosConResta = ["cod559", "cod533"];
      const total = +store.calcularTotal(codigos, codigosConResta);
      store.setValue("cod603", total);
      return parseNumber(total);
    },

    impuesto42(): number {
      return this.datos.cod602 - this.datos.cod603;
    },

    cod507(): string {
      let imp42 = this.impuesto42;
      if (imp42 < 0) {
        store.setValue("cod507", imp42 * -1);
      } else {
        store.setValue("cod507", 0);
      }
      const cod507 = ref(this.datos.cod507);
      return parseNumber(cod507.value);
    },

    cod506(): string {
      let imp42 = this.impuesto42;
      if (imp42 >= 0) {
        store.setValue("cod506", imp42);
      } else {
        store.setValue("cod506", 0);
      }
      const cod506 = ref(this.datos.cod506);
      return parseNumber(cod506.value);
    },
  },
});
</script>
