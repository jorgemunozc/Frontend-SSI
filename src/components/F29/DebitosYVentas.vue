<template>
  <table>
    <thead class="f29__seccion__subheader">
      <tr>
        <th colspan="4">
          IMPUESTO AL VALOR AGREGADO D.L 825/74
        </th>
        <th colspan="2">
          Cantidad de Documentos
        </th>
        <th colspan="3">
          Monto Neto
        </th>
      </tr>
    </thead>
    <!-- Cuerpo de tabla 9 columnas de ancho -->
    <tbody>
      <tr>
        <td class="celda-linea">
          1
        </td>
        <th
          class="vertical-header"
          rowspan="18"
        >
          Ventas y/o Servicios Prestados
        </th>
        <th
          class="vertical-header"
          rowspan="6"
        >
          Informaci&oacute;n de Ingresos
        </th>
        <td>Exportaciones</td>
        <td class="celda-codigo">
          585
        </td>
        <td>
          <input
            v-model.lazy="datos.cod585"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td class="celda-codigo">
          20
        </td>
        <td colspan="2">
          <input
            v-model.lazy="datos.cod20"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
      </tr>
      <tr>
        <td class="celda-linea">
          2
        </td>
        <td>Ventas y/o Servicios prestados Exentos, o No Gravados del giro</td>
        <td class="celda-codigo">
          586
        </td>
        <td>
          <input
            v-model.lazy="datos.cod586"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td class="celda-codigo">
          142
        </td>
        <td colspan="2">
          <input
            v-model.lazy="datos.cod142"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
      </tr>

      <tr>
        <td class="celda-linea">
          3
        </td>
        <td>
          Ventas con retenci&oacute;n sobre el margen de comercializaci&oacute;n
          (contribuyentes retenidos)
        </td>
        <td class="celda-codigo">
          731
        </td>
        <td>
          <input
            v-model.lazy="datos.cod731"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td class="celda-codigo">
          732
        </td>
        <td colspan="2">
          <input
            v-model.lazy="datos.cod732"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
      </tr>

      <tr>
        <td class="celda-linea">
          4
        </td>
        <td>
          Ventas y/o Servicios prestados exentos o No Gravados que no son del
          giro
        </td>
        <td class="celda-codigo">
          714
        </td>
        <td>
          <input
            v-model.lazy="datos.cod714"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td class="celda-codigo">
          715
        </td>
        <td colspan="2">
          <input
            v-model.lazy="datos.cod715"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
      </tr>

      <tr>
        <td class="celda-linea">
          5
        </td>
        <td>
          Facturas de Compra recibidas con retenci&oacute;n total
          (contribuyentes retenidos) y Factura de Inicio emitida
        </td>
        <td class="celda-codigo">
          515
        </td>
        <td>
          <input
            v-model.lazy="datos.cod515"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td class="celda-codigo">
          587
        </td>
        <td colspan="2">
          <input
            v-model.lazy="datos.cod587"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
      </tr>

      <tr>
        <td class="celda-linea">
          6
        </td>
        <td colspan="3">
          Facturas de compras recibidas con retenci&oacute;n parcial (Total
          neto)
        </td>
        <td class="celda-codigo">
          720
        </td>
        <td colspan="2">
          <input
            v-model.lazy="datos.cod720"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
      </tr>

      <!-- encabezado -->
      <tr class="f29__seccion__subheader">
        <td />
        <td colspan="2" />
        <th colspan="2">
          Cantidad de Documentos
        </th>
        <th colspan="3">
          D&eacute;bitos
        </th>
      </tr>
      <!-- fin encabezado -->

      <tr>
        <td class="celda-linea">
          7
        </td>
        <th
          class="vertical-header"
          rowspan="11"
        >
          Genera D&eacute;bito
        </th>
        <td>Facturas emitidas por ventas y servicios del giro</td>
        <td class="celda-codigo">
          503
        </td>
        <td>
          <input
            v-model.lazy="datos.cod503"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td class="celda-codigo">
          502
        </td>
        <td>
          <input
            v-model.lazy="datos.cod502"
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
          8
        </td>
        <td>
          Facturas emitidas por la venta de bienes inmuebles afectas a IVA
        </td>
        <td class="celda-codigo">
          763
        </td>
        <td>
          <input
            v-model.lazy="datos.cod763"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td class="celda-codigo">
          764
        </td>
        <td>
          <input
            v-model.lazy="datos.cod764"
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
          9
        </td>
        <td>
          Faturas y Notas de D&eacute;bitos por ventas y servicios que no son
          del giro (activo fijo y otros)
        </td>
        <td class="celda-codigo">
          716
        </td>
        <td>
          <input
            v-model.lazy="datos.cod716"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td class="celda-codigo">
          717
        </td>
        <td>
          <input
            v-model.lazy="datos.cod717"
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
          10
        </td>
        <td>Boletas</td>
        <td class="celda-codigo">
          110
        </td>
        <td>
          <input
            v-model.lazy="datos.cod110"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td class="celda-codigo">
          111
        </td>
        <td>
          <input
            v-model.lazy="datos.cod111"
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
          11
        </td>
        <td>
          Comprobantes o Recibos de Pago generados en transacciones pagadas a
          trav&eacute;s de medios electr&oacute;nicos
        </td>
        <td class="celda-codigo">
          758
        </td>
        <td>
          <input
            v-model.lazy="datos.cod758"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td class="celda-codigo">
          759
        </td>
        <td>
          <input
            v-model.lazy="datos.cod759"
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
          12
        </td>
        <td>
          Notas de D&eacute;bito emitidas asociadas al giro y Notas de
          D&eacute;bito recibidas de terceros por retenci&oacute;n parcial de
          cambio de sujeto
        </td>
        <td class="celda-codigo">
          512
        </td>
        <td>
          <input
            v-model.lazy="datos.cod512"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td class="celda-codigo">
          513
        </td>
        <td>
          <input
            v-model.lazy="datos.cod513"
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
          13
        </td>
        <td>
          Notas de Cr&eacute;dito emitidas por Facturas asociadas al giro y
          Notas de Cr&eacute;dito recibidas de terceros por retenci&oacute;n
          parcial de cambio de sujeto
        </td>
        <td class="celda-codigo">
          509
        </td>
        <td>
          <input
            v-model.lazy="datos.cod509"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td class="celda-codigo">
          510
        </td>
        <td>
          <input
            v-model.lazy="datos.cod510"
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
          14
        </td>
        <td>
          Notas de Cr&eacute;dito emitidas por Vales de m&aacute;quinas
          autorizadas por el Servicio
        </td>
        <td class="celda-codigo">
          708
        </td>
        <td>
          <input
            v-model.lazy="datos.cod708"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td class="celda-codigo">
          709
        </td>
        <td>
          <input
            v-model.lazy="datos.cod709"
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
          15
        </td>
        <td>
          Notas de Cr&eacute;dito emitidas por ventas y servicios que no son del
          giro (activo fijo y otros)
        </td>
        <td class="celda-codigo">
          733
        </td>
        <td>
          <input
            v-model.lazy="datos.cod733"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td class="celda-codigo">
          734
        </td>
        <td>
          <input
            v-model.lazy="datos.cod734"
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
          16
        </td>
        <td>
          Facturas de Compra recibidas con retenci&oacute;n parcial
          (contribuyentes retenidos)
        </td>
        <td class="celda-codigo">
          516
        </td>
        <td>
          <input
            v-model.lazy="datos.cod516"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td class="celda-codigo">
          517
        </td>
        <td>
          <input
            v-model.lazy="datos.cod517"
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
          17
        </td>
        <td>Liquidaci&oacute;n y Liquidaci&oacute;n Factura</td>
        <td class="celda-codigo">
          500
        </td>
        <td>
          <input
            v-model.lazy="datos.cod500"
            type="text"
            class="f29__input"
            maxlength="12"
          >
        </td>
        <td class="celda-codigo">
          501
        </td>
        <td>
          <input
            v-model.lazy="datos.cod501"
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
          18
        </td>
        <td colspan="5">
          Adiciones al D&eacute;bito Fiscal del mes, originadas en devoluciones
          excesivas registradas en otros per&iacute;odos por Art. 27 bis
        </td>
        <td class="celda-codigo">
          154
        </td>
        <td>
          <input
            v-model.lazy="datos.cod154"
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
          19
        </td>
        <td colspan="5">
          Restituci&oacute;n Adicional por proporci&oacute;n de operaciones
          exentas y/o no gravadas por concepto Art. 27 bis, inc. 2° (Ley
          19.738/01)
        </td>
        <td class="celda-codigo">
          518
        </td>
        <td>
          <input
            v-model.lazy="datos.cod518"
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
          20
        </td>
        <td colspan="5">
          Reintegro del Impuesto de Timbres y Estampillas, Art 3° Ley N° 20.259
          e IVA determinado en el Arrendamiento espor&aacute;dico de BBRR
          amoblados
        </td>
        <td class="celda-codigo">
          713
        </td>
        <td>
          <input
            v-model.lazy="datos.cod713"
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
          21
        </td>
        <td colspan="5">
          <table class="f29__seccion__subtabla">
            <tr>
              <td>Adiciones al D&eacute;bito por IEPD Ley 20.765</td>
              <td>M3</td>
              <td class="celda-codigo">
                738
              </td>
              <td>
                <input
                  v-model.lazy="datos.cod738"
                  type="text"
                  class="f29__input"
                  maxlength="12"
                >
              </td>
              <td>Base</td>
              <td class="celda-codigo">
                739
              </td>
              <td>
                <input
                  v-model.lazy="datos.cod739"
                  type="text"
                  class="f29__input"
                  maxlength="12"
                >
              </td>
              <td>Variable</td>
              <td class="celda-codigo">
                740
              </td>
              <td>
                <input
                  v-model.lazy="datos.cod740"
                  type="text"
                  class="f29__input"
                  maxlength="12"
                >
              </td>
            </tr>
          </table>
        </td>
        <td class="celda-codigo">
          741
        </td>
        <td>
          <input
            v-model.lazy="datos.cod741"
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
          22
        </td>
        <th colspan="5">
          TOTAL D&Eacute;BITOS
        </th>
        <td class="celda-codigo">
          538
        </td>
        <td>
          <input
            v-model.lazy="cod538"
            type="text"
            class="f29__input"
            maxlength="12"
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
import store from "@/store";

export default defineComponent({
  setup() {
    const datos = store.state;
    return {
      datos,
      store,
    };
  },

  computed: {
    cod538(): string {
      this.store.calcularDebito();
      const cod538 = this.datos.cod538
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      return cod538;
    },
  },
});
</script>
