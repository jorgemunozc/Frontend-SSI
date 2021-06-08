<template>
  <table>
    <tbody>
      <tr>
        <td class="celda-linea">69</td>
        <td colspan="12">Letras e), h), i) (tasa 15%)</td>
        <td class="celda-codigo">522</td>
        <td class="f29__input-wrapper">
          <input
            type="text"
            class="f29__input"
            v-model.lazy="datos.cod522"
            maxlength="12"
          />
        </td>
        <td class="celda-signo">+</td>
      </tr>
      <tr>
        <td class="celda-linea">70</td>
        <td colspan="12">Letra j) (tasa 50%)</td>
        <td class="celda-codigo">526</td>
        <td><input type="text" class="f29__input" v-model.lazy="datos.cod526" maxlength="12"/></td>
        <td class="celda-signo">+</td>
      </tr>
      <tr>
        <td class="celda-linea">71</td>
        <td colspan="12">
          D&eacute;bito de Impuesto Adicional Ventas Art. 37 letras a), b) y c)
          y Art. 40 D.L. 825 (tasa 15%)
        </td>
        <td class="celda-codigo">113</td>
        <td><input type="text" class="f29__input" v-model.lazy="datos.cod113" maxlength="12"/></td>
        <td class="celda-signo">+</td>
      </tr>
      <tr>
        <td class="celda-linea">72</td>
        <td colspan="12">
          Cr&eacute;dito de Impuesto Adicional Art. 37 letras a), b) y c) D.L.
          825
        </td>
        <td class="celda-codigo">28</td>
        <td><input type="text" class="f29__input" v-model.lazy="datos.cod28" maxlength="12"/></td>
        <td class="celda-signo">-</td>
      </tr>
      <tr>
        <td class="celda-linea">73</td>
        <td colspan="12">
          Monto reintegrado por devoluci&oacute;n indebida de cr&eacute;dito por
          exportadores D.L. 825
        </td>
        <td class="celda-codigo">548</td>
        <td><input type="text" class="f29__input" v-model.lazy="datos.cod548" maxlength="12"/></td>
        <td class="celda-signo">-</td>
      </tr>
      <tr>
        <td class="celda-linea">74</td>
        <td colspan="12">
          Remanente cr&eacute;dito Art. 37 mes anterior D.L. 825
        </td>
        <td class="celda-codigo">540</td>
        <td><input type="text" class="f29__input" v-model.lazy="datos.cod540" maxlength="12"/></td>
        <td class="celda-signo">-</td>
      </tr>
      <tr>
        <td class="celda-linea">75</td>
        <td colspan="12">
          Devoluci&oacute;n Solicitud Art. 36 relativa al Impuesto Adicional
          Art. 37 letras a), b) y c) D.L. 825
        </td>
        <td class="celda-codigo">541</td>
        <td><input type="text" class="f29__input" v-model.lazy="datos.cod541" maxlength="12"/></td>
        <td class="celda-signo">+</td>
      </tr>

      <tr>
        <td class="celda-linea">76</td>
        <td colspan="7">
          Remanente cr&eacute;dito impuesto Art. 37 para per&iacute;odo
          siguiente
        </td>
        <td class="celda-codigo">549</td>
        <td><input type="text" class="f29__input" :value="cod549" disabled/></td>
        <td colspan="3">Impuesto Adicional Art. 37 y Art. 40 determinado</td>
        <td class="celda-codigo">550</td>
        <td><input type="text" class="f29__input" :value="cod550" disabled/></td>
        <td class="celda-signo">+</td>
      </tr>
    </tbody>
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
      store,
    }
  },
});
</script>
