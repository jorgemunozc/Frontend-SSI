<template>
    <!-- <debitos-y-ventas /> 
    <compras-y-creditos />
    <impuesto-determinado /> -->
    <!-- <impuesto-renta /> -->
    <!-- <tributacion-simplificada /> -->
    <impuesto-ad-37 />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DebitosYVentas from '@/components/F29/DebitosYVentas.vue';
import ComprasYCreditos from '@/components/F29/CreditosYCompras.vue';
import ImpuestoDeterminado from '@/components/F29/ImpuestoDeterminado.vue';
import ImpuestoRenta from '@/components/F29/ImpuestoRenta.vue';
import TributacionSimplificada  from '@/components/F29/TributacionSimplificada.vue';
import ImpuestoAd37 from '@/components/F29/ImpuestoAd37.vue';

export default defineComponent({
    components: {
        // ComprasYCreditos,
        // ImpuestoDeterminado,
        // // DebitosYVentas,
        // ImpuestoRenta,
        // TributacionSimplificada,
        ImpuestoAd37,
    }
})
</script>

<style>
table {
    /* border-collapse: collapse; */
}

td, th {
    border: 1px solid;
}
</style>