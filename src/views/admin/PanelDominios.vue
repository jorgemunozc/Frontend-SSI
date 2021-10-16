<template>
  <div class="container">
    <Navbar class="md:h-full" />
    <div class="md:ml-48 p-2">
      <h1 class="text-blue-700 font-semibold text-2xl mb-4">
        Dominios
      </h1>
      <p class="font-light">
        Aqu&iacute; podr&aacute; revisar los dominios de correo permitidos para ingresar
        y/o registrarse a la plataforma.
      </p>
      <p class="mb-8 font-light">
        Si desea agregar uno simplemente llene el formulario que est&aacute; debajo.
      </p>
      <DominioInput />
      <DominiosList />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import DominiosList from '@/components/DominiosList.vue';
import Navbar from '@/components/Navbar.vue';
import DominioInput from '@/components/DominioInput.vue';

export default defineComponent({
  components: {
    DominiosList,
    Navbar,
    DominioInput,
  }
})
</script>
