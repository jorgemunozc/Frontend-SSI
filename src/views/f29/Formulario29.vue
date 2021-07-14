<template>
  <div class="f29 text-xs">
    <div class="f29__seccion">
      <header-formulario
        :folio="folio"
        :rut="datosEmpresa.rut"
        :month="periodo.month"
        :year="periodo.year"
      />
    </div>
    <div class="f29__seccion">
      <info-empresa :razonSocial="datosEmpresa.razonSocial" />
    </div>
    <div class="f29__seccion">
      <div class="f29__seccion__header">D&Eacute;BITOS Y VENTAS</div>
      <debitos-y-ventas :editable="editable" />
    </div>
    <div class="f29__seccion">
      <div class="f29__seccion__header">CR&Eacute;DITOS Y COMPRAS</div>
      <compras-y-creditos :editable="editable" />
    </div>
    <div class="f29__seccion">
      <impuesto-determinado />
    </div>
    <div class="f29__seccion">
      <div class="f29__seccion__header">IMPUESTO A LA RENTA D.L. 824/74</div>
      <impuesto-renta :editable="editable" />
    </div>
    <div class="f29__seccion">
      <subtotal-impuesto-determinado />
    </div>
    <div class="f29__seccion">
      <div class="f29__seccion__header">TRIBUTACI&Oacute;N SIMPLIFICADA</div>
      <tributacion-simplificada :editable="editable" />
    </div>
    <div class="f29__seccion">
      <div class="f29__seccion__header">
        IMPUESTO ADICIONAL ART. 37 D.L. 825/74
      </div>
      <impuesto-ad-37 :editable="editable" />
    </div>
    <div class="f29__seccion">
      <div class="f29__seccion__header">
        IMPUESTO ADICIONAL ART. 42 D.L. 825
      </div>
      <impuesto-ad-42 :editable="editable" />
    </div>
    <div class="f29__seccion">
      <div class="f29__seccion__header">CAMBIO SUJETO D.L. 825</div>
      <cambio-sujeto :editable="editable" />
    </div>
    <div class="f29__seccion">
      <div class="f29__seccion__header">CR&Eacute;DITOS ESPECIALES</div>
      <creditos-especiales :editable="editable" />
    </div>
    <div class="f29__seccion">
      <total-determinado />
    </div>
    <div class="f29__seccion">
      <div class="f29__seccion__header">
        REMANENTE CR&Eacute;DITOS ESPECIALES
      </div>
      <remanente-creditos-esp :editable="editable" />
    </div>
    <div class="f29__seccion">
      <totales-formulario />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HeaderFormulario from "@/components/F29/HeaderFormulario.vue";
import InfoEmpresa from "@/components/F29/InfoEmpresa.vue";
import DebitosYVentas from "@/components/F29/DebitosYVentas.vue";
import ComprasYCreditos from "@/components/F29/CreditosYCompras.vue";
import ImpuestoDeterminado from "@/components/F29/ImpuestoDeterminado.vue";
import ImpuestoRenta from "@/components/F29/ImpuestoRenta.vue";
import TributacionSimplificada from "@/components/F29/TributacionSimplificada.vue";
import ImpuestoAd37 from "@/components/F29/ImpuestoAd37.vue";
import ImpuestoAd42 from "@/components/F29/ImpuestoAd42.vue";
import CambioSujeto from "@/components/F29/CambioSujeto.vue";
import CreditosEspeciales from "@/components/F29/CreditosEspeciales.vue";
import TotalDeterminado from "@/components/F29/TotalDeterminado.vue";
import RemanenteCreditosEsp from "@/components/F29/RemanenteCreditosEsp.vue";
import TotalesFormulario from "@/components/F29/TotalesFormulario.vue";
import SubtotalImpuestoDeterminado from "@/components/F29/SubtotalImpuestoDeterminado.vue";

export default defineComponent({
  components: {
    HeaderFormulario,
    InfoEmpresa,
    ComprasYCreditos,
    ImpuestoDeterminado,
    DebitosYVentas,
    ImpuestoRenta,
    SubtotalImpuestoDeterminado,
    TributacionSimplificada,
    ImpuestoAd37,
    ImpuestoAd42,
    CambioSujeto,
    CreditosEspeciales,
    TotalDeterminado,
    RemanenteCreditosEsp,
    TotalesFormulario,
  },
  props: {
    folio: Number,
    datosEmpresa: Object,
    periodo: Object,
    editable: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style scoped>
@import "~@/assets/styles/f29.css";
</style>