<template>
  <table>
    <tr>
      <td class="celda-linea">114</td>
      <td colspan="12">
        Remanente Cr&eacute;dito por Sistemas Solares T&eacute;rmicos, Ley N°
        20.365
      </td>
      <td class="celda-codigo">728</td>
      <td class="f29__input-wrapper">
        <input
          type="text"
          class="f29__input"
          v-model.lazy="datos.cod728"
          maxlength="12"
        />
      </td>
      <td class="celda-signo"></td>
    </tr>

    <tr>
      <td class="celda-linea">115</td>
      <td colspan="12">
        Remanente per&iacute;odo siguiente Pantente Aguas, Ley N° 20.017
      </td>
      <td class="celda-codigo">707</td>
      <td>
        <input
          type="text"
          class="f29__input"
          v-model.lazy="datos.cod707"
          maxlength="12"
        />
      </td>
      <td class="celda-signo"></td>
    </tr>

    <tr>
      <td class="celda-linea">116</td>
      <td colspan="12">Remanente Cotizaci&oacute;n Adicional Ley 18.566/86</td>
      <td class="celda-codigo">73</td>
      <td>
        <input
          type="text"
          class="f29__input"
          v-model.lazy="datos.cod73"
          maxlength="12"
        />
      </td>
      <td class="celda-signo"></td>
    </tr>

    <tr>
      <td class="celda-linea">117</td>
      <td colspan="12">
        Remanente Cr&eacute;dito Especial Empresas Constructoras
      </td>
      <td class="celda-codigo">130</td>
      <td>
        <input
          type="text"
          class="f29__input"
          v-model.lazy="datos.cod130"
          maxlength="12"
        />
      </td>
      <td class="celda-signo"></td>
    </tr>

    <tr>
      <td class="celda-linea">118</td>
      <td colspan="12">
        Remanente Recuperaci&oacute;n Peajes Transportistas Pasajeros Ley
        19.764/01
      </td>
      <td class="celda-codigo">591</td>
      <td>
        <input
          type="text"
          class="f29__input"
          v-model.lazy="datos.cod591"
          maxlength="12"
        />
      </td>
      <td class="celda-signo"></td>
    </tr>
  </table>
</template>

<script lang="ts">
import store from "@/store";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const datos = store.state;

    return {
      datos,
    };
  },
});
</script>
