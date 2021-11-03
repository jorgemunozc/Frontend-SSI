<template>
  <table>
    <thead class="f29__seccion__subheader">
      <tr>
        <th colspan="6">
          IMPUESTO AL VALOR AGREGADO D.L 825/74
        </th>
        <th colspan="2">
          Con Derecho a Cr&eacute;dito
        </th>
        <th colspan="3">
          Sin Derecho a Cr&eacute;dito
        </th>
      </tr>
    </thead>
    <!-- Cuerpo de tabla 11 columnas de ancho -->
    <tbody>
      <tr>
        <td class="celda-linea">
          23
        </td>
        <th
          class="vertical-header"
          rowspan="14"
        >
          Compras y/o Servicios Utilizados
        </th>
        <td colspan="4">
          IVA por documentos electr&oacute;nicos recibidos
        </td>
        <td class="celda-codigo">
          511
        </td>
        <td>
          <input
            v-model.lazy="datos.cod511"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-codigo">
          514
        </td>
        <td colspan="2">
          <input
            v-model.lazy="datos.cod514"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
      </tr>
      <tr class="f29__seccion__subheader">
        <td />
        <td colspan="4" />
        <th colspan="2">
          Cantidad de Documentos
        </th>
        <th colspan="3">
          Monto Neto
        </th>
      </tr>
      <tr>
        <td class="celda-linea">
          24
        </td>
        <th
          rowspan="3"
          colspan="2"
          class="vertical-header"
        >
          Sin Derecho a Cr&eacute;dito Fiscal
        </th>
        <td colspan="2">
          Internas Afectas
        </td>
        <td class="celda-codigo">
          564
        </td>
        <td>
          <input
            v-model.lazy="datos.cod564"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-codigo">
          521
        </td>
        <td colspan="2">
          <input
            v-model.lazy="datos.cod521"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
      </tr>
      <tr>
        <td class="celda-linea">
          25
        </td>
        <td colspan="2">
          Importaciones
        </td>
        <td class="celda-codigo">
          566
        </td>
        <td>
          <input
            v-model.lazy="datos.cod566"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-codigo">
          560
        </td>
        <td colspan="2">
          <input
            v-model.lazy="datos.cod560"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
      </tr>
      <tr>
        <td class="celda-linea">
          26
        </td>
        <td colspan="2">
          Internas exentas, o no gravadas
        </td>
        <td class="celda-codigo">
          584
        </td>
        <td>
          <input
            v-model.lazy="datos.cod584"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-codigo">
          562
        </td>
        <td colspan="2">
          <input
            v-model.lazy="datos.cod562"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
      </tr>
      <tr class="f29__seccion__subheader">
        <th />
        <th colspan="4" />
        <th colspan="2">
          Cantidad de Documentos
        </th>
        <th colspan="3">
          Cr&eacute;dito, Recuperaci&oacute;n y Reintegro
        </th>
      </tr>

      <tr>
        <td class="celda-linea">
          27
        </td>
        <th
          rowspan="8"
          class="vertical-header"
        >
          Con derecho a cr&eacute;dito fiscal
        </th>
        <th
          class="vertical-header"
          rowspan="6"
        >
          Internas
        </th>
        <td colspan="2">
          Facturas recibidas del giro y Facturas de compra emitidas
        </td>
        <td class="celda-codigo">
          519
        </td>
        <td>
          <input
            v-model.lazy="datos.cod519"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-codigo">
          520
        </td>
        <td class="f29__input-wrapper">
          <input
            v-model.lazy="datos.cod520"
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
          28
        </td>
        <td colspan="2">
          Facturas recibidas de Proveedores: Supermercados y Comercios
          similares, Art. 23 N°4 D.L.825, de 1974 (Ley N°20.780)
        </td>
        <td class="celda-codigo">
          761
        </td>
        <td>
          <input
            v-model.lazy="datos.cod761"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-codigo">
          762
        </td>
        <td>
          <input
            v-model.lazy="datos.cod762"
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
          29
        </td>
        <td colspan="2">
          Facturas recibidas por Adquisici&oacute;n o Construcci&oacute;n de
          Bienes Inmuebles, Art.8° transitorio (Ley N°20.780)
        </td>
        <td class="celda-codigo">
          765
        </td>
        <td>
          <input
            v-model.lazy="datos.cod765"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-codigo">
          766
        </td>
        <td>
          <input
            v-model.lazy="datos.cod766"
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
          30
        </td>
        <td colspan="2">
          Facturas activo fijo
        </td>
        <td class="celda-codigo">
          524
        </td>
        <td>
          <input
            v-model.lazy="datos.cod524"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-codigo">
          525
        </td>
        <td>
          <input
            v-model.lazy="datos.cod525"
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
          31
        </td>
        <td colspan="2">
          Notas de Cr&eacute;dito recibidas y Notas de Cr&eacute;dito emitidas
          por retenci&oacute; de cambio de sujeto
        </td>
        <td class="celda-codigo">
          527
        </td>
        <td>
          <input
            v-model.lazy="datos.cod527"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-codigo">
          528
        </td>
        <td>
          <input
            v-model.lazy="datos.cod528"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-signo">
          -
        </td>
      </tr>

      <tr>
        <td class="celda-linea">
          32
        </td>
        <td colspan="2">
          Notas de D&eacute;bito recibidas y Notas de D&eacute;bito emitidas por
          retenci&oacute;n de cambio de sujeto
        </td>
        <td class="celda-codigo">
          531
        </td>
        <td>
          <input
            v-model.lazy="datos.cod531"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-codigo">
          532
        </td>
        <td>
          <input
            v-model.lazy="datos.cod532"
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
          33
        </td>
        <th
          class="vertical-header"
          rowspan="2"
        >
          Importaciones
        </th>
        <td colspan="2">
          Declaraciones de ingreso (DIN) importaciones del giro
        </td>
        <td class="celda-codigo">
          534
        </td>
        <td>
          <input
            v-model.lazy="datos.cod534"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-codigo">
          535
        </td>
        <td>
          <input
            v-model.lazy="datos.cod535"
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
          34
        </td>
        <td colspan="2">
          Declaraciones de ingreso (DIN) importaciones activo fijo
        </td>
        <td class="celda-codigo">
          536
        </td>
        <td>
          <input
            v-model.lazy="datos.cod536"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-codigo">
          553
        </td>
        <td>
          <input
            v-model.lazy="datos.cod553"
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
          35
        </td>
        <td colspan="7">
          Remanente Cr&eacute;dito Fiscal mes anterior
        </td>
        <td class="celda-codigo">
          504
        </td>
        <td>
          <input
            v-model.lazy="datos.cod504"
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
          36
        </td>
        <td colspan="7">
          Devoluci&oacute;n Solicitud Art. 36 (Exportadores)
        </td>
        <td class="celda-codigo">
          593
        </td>
        <td>
          <input
            v-model.lazy="datos.cod593"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-signo">
          -
        </td>
      </tr>
      <tr>
        <td class="celda-linea">
          37
        </td>
        <td colspan="7">
          Devoluci&oacute;n Solicitud Art. 27 bis (Activo Fijo)
        </td>
        <td class="celda-codigo">
          594
        </td>
        <td>
          <input
            v-model.lazy="datos.cod594"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-signo">
          -
        </td>
      </tr>
      <tr>
        <td class="celda-linea">
          38
        </td>
        <td colspan="7">
          Certificado Imputaci&oacute;n Art. 27 bis (Activo Fijo)
        </td>
        <td class="celda-codigo">
          592
        </td>
        <td>
          <input
            v-model.lazy="datos.cod592"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-signo">
          -
        </td>
      </tr>
      <tr>
        <td class="celda-linea">
          39
        </td>
        <td colspan="7">
          Devoluci&oacute;n Solicitud Art. 3 (Cambio de sujeto)
        </td>
        <td class="celda-codigo">
          539
        </td>
        <td>
          <input
            v-model.lazy="datos.cod539"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-signo">
          -
        </td>
      </tr>
      <tr>
        <td class="celda-linea">
          40
        </td>
        <td colspan="7">
          Devoluci&oacute;n Solicitud Ley N° 20.258 por remamente CF IVA
          originado en Impuesto Espec&iacute;fico Petr&oacute;leo Diesel
          (Generadoras El&eacute;ctricas)
        </td>
        <td class="celda-codigo">
          718
        </td>
        <td>
          <input
            v-model.lazy="datos.cod718"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td class="celda-signo">
          -
        </td>
      </tr>
      <tr>
        <td class="celda-linea">
          41
        </td>
        <td colspan="7">
          Monto Reintegrado por Devoluci&oacute;n Indebida de Cr&eacute;dito
          Fiscal D.S. 348 (Exportadores)
        </td>
        <td class="celda-codigo">
          164
        </td>
        <td>
          <input
            v-model.lazy="datos.cod164"
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
      <tr class="f29__seccion__subheader">
        <th />
        <th colspan="2" />
        <th colspan="3">
          M3 Comprados con derecho a cr&eacute;dito
        </th>
        <th colspan="2">
          Componentes del impuesto
        </th>
        <th colspan="3" />
      </tr>

      <tr>
        <td
          rowspan="2"
          class="celda-linea"
        >
          42
        </td>
        <td rowspan="4">
          Ley 20.765
        </td>
        <td rowspan="2">
          Recuperaci&oacute;n del Impuesto Espec&iacute;fico al Petr&oacute;leo
          Diesel (Art. 7° Ley 18.502, Arts. 1° y 3° D.S. N°311/86)
        </td>
        <td
          rowspan="2"
          class="celda-codigo"
        >
          730
        </td>
        <td
          rowspan="2"
          class="f29__input-wrapper"
        >
          <input
            v-model.lazy="datos.cod730"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td>Base</td>
        <td class="celda-codigo">
          742
        </td>
        <td>
          <input
            v-model.lazy="datos.cod742"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td
          rowspan="2"
          class="celda-codigo"
        >
          127
        </td>
        <td rowspan="2">
          <input
            v-model.lazy="datos.cod127"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td
          rowspan="2"
          class="celda-signo"
        >
          +
        </td>
      </tr>

      <tr>
        <td>Variable</td>
        <td class="celda-codigo">
          743
        </td>
        <td>
          <input
            v-model.lazy="datos.cod743"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
      </tr>

      <tr>
        <td
          rowspan="2"
          class="celda-linea"
        >
          43
        </td>
        <td rowspan="2">
          Recuperaci&oacute;n del Impuesto Espec&iacute;fico al Petr&oacute;leo
          Diesel soportado por Transportistas de Carga (Art. 2° Ley 19.764)
        </td>
        <td
          rowspan="2"
          class="celda-codigo"
        >
          729
        </td>
        <td rowspan="2">
          <input
            v-model.lazy="datos.cod729"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td>Base</td>
        <td class="celda-codigo">
          744
        </td>
        <td>
          <input
            v-model.lazy="datos.cod744"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td
          rowspan="2"
          class="celda-codigo"
        >
          544
        </td>
        <td rowspan="2">
          <input
            v-model.lazy="datos.cod544"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
        <td
          rowspan="2"
          class="celda-signo"
        >
          +
        </td>
      </tr>

      <tr>
        <td>Variable</td>
        <td class="celda-codigo">
          745
        </td>
        <td>
          <input
            v-model.lazy="datos.cod745"
            type="text"
            class="f29__input"
            maxlength="12"
            :disabled="!editable"
          >
        </td>
      </tr>

      <tr>
        <td class="celda-linea">
          44
        </td>
        <td colspan="7">
          Cr&eacute;dito del Art. 11° Ley 18.211 (correspondiente a Zona Franca
          de Extensi&oacute;)
        </td>
        <td class="celda-codigo">
          523
        </td>
        <td>
          <input
            v-model.lazy="datos.cod523"
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
          45
        </td>
        <td colspan="7">
          Cr&eacute;dito por Impuesto de Timbres Y Estampillas, Art. 3° Ley
          20.259
        </td>
        <td class="celda-codigo">
          712
        </td>
        <td>
          <input
            v-model.lazy="datos.cod712"
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
          46
        </td>
        <td colspan="7">
          Cr&eacute;dito por IVA restituido a aportantes sin domicilio ni
          residencia en Chile (Art. 83, del art&iacute;culo primero Ley 20.712)
        </td>
        <td class="celda-codigo">
          757
        </td>
        <td>
          <input
            v-model.lazy="datos.cod757"
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
          47
        </td>
        <th colspan="7">
          TOTAL CR&Eacute;DITOS
        </th>
        <td class="celda-codigo">
          537
        </td>
        <td>
          <input
            type="text"
            class="f29__input"
            :value="cod537"
            disabled
          >
        </td>
        <td class="celda-signo">
          =
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
  props: {
    editable: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const datos = store.state;
    return {
      datos,
      store,
    };
  },

  computed: {
    cod537(): string {
      this.store.calcularCreditoBasico();
      const cod537 = parseNumber(this.datos.cod537);
      return cod537;
    },
  },
});
</script>
