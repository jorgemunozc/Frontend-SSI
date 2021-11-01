<template>
  <div class="h-full mt-4">
    <div 
      v-if="!pdfIsReady" 
      class="w-full h-96 flex items-center"
    >
      <LoadingSpinner class="w-full h-20" />
    </div>
    <iframe
      v-if="pdfIsReady"
      :src="cred"
      frameborder="0"
      type="application/pdf"
      class="w-full max-w-4xl mx-auto"
      height="600"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { jsPDF } from 'jspdf';
import { obtenerEmpresa } from '@/services/EmpresaService';
import { generateCard, CredencialLogos } from '@/utils/cardGenerator';
import LoadingSpinner from './LoadingSpinner.vue';

export default defineComponent({
  components: { 
    LoadingSpinner
  },

  setup() {
    const logos: CredencialLogos = {
      virginioLogo: new Image(),
      euroPENLogo: new Image(),
      empresaSimLogo: new Image(),
    };

    logos.virginioLogo.src = require('@/assets/virginio_logo.jpg');
    logos.euroPENLogo.src = require('@/assets/europen_logo.png');
    logos.empresaSimLogo.src = require('@/assets/CFE_logo.png');

    const credencial = new jsPDF({
      unit: 'pt',
    });
    
    let empresa = {} as Empresa;
    const pdfIsReady = ref(false);
    let cred = computed(() => credencial.output('bloburi'));
    const cargarPDF = async function () {
      empresa = await obtenerEmpresa();
      generateCard(credencial, empresa, logos);
      pdfIsReady.value = true;
    };
    cargarPDF();
    return {
      cred,
      pdfIsReady,
    };
  },
});
</script>
