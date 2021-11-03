<template>
  <div class="max-w-md mx-auto flex-grow mt-4 px-4">
    <h1 class="text-2xl text-blue-700 font-semibold">
      Recuperación Cuenta
    </h1>
    <div 
      class="my-6 p-2 bg-blue-50 border border-blue-100 text-sm"
      :class="{'opacity-0': !displayInfoMsg }"
    >
      <p>
        En unos minutos una nueva clave será enviada al correo ingresado si este
        posee una cuenta asociada en la plataforma.
      </p>
    </div>
    <form 
      class="mx-auto flex flex-col px-2 py-5 border border-gray-100"
      @submit.prevent="solicitarPassword" 
    >
      <div class="flex flex-col mb-8 relative text-gray-500 focus-within:text-gray-700 relative">
        <label class="font-semibold">Ingrese correo</label>
        <input 
          v-model="correo"
          type="text" 
          class="flex-grow h-10 border-b-2 border-gray-200 txt-xl pl-2 bg-gray-100 focus:outline-none focus:bg-gray-200"
          :class="cssInvalidInput"
        >
        <div
          v-if="hasError"
          class="w-full h-4 pl-2 my-1 absolute top-full bg-red-200 text-red-800 rounded-b text-xs flex items-center"
        >
          <small>{{ errorMsg }}</small>
        </div>
      </div>
      <vue-recaptcha 
        class="my-4 mx-auto"
        :site-key="key"
        @verify="verifyCaptchaResponse($event)"
        @fail="captchaFailed"
        @expire="captchaExpired"
      />
      <button
        class="h-10 text-white text-xl uppercase rounded"
        :class="colorButton"
      >
        <loading-spinner v-if="isLoading" />
        <span v-else>Enviar</span>
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import vueRecaptcha from 'vue3-recaptcha2';
import { resetPass } from '@/services/AuthService';
import { getCaptchaKey } from '@/utils/reCaptcha';
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  components: { LoadingSpinner, vueRecaptcha },
  setup() {
    const hasError = ref(false);
    const correo = ref('');
    const errorMsg = ref('');
    const displayInfoMsg = ref(false);
    const isLoading = ref(false);
    const isHuman = ref(false);
    const key = ref(getCaptchaKey());
    const canSendForm = computed(() => {
      return isHuman.value && correo.value.length > 0;
    });

    const colorButton = computed(() => {
      if (canSendForm.value){
        return ['bg-blue-800', 'hover:bg-blue-900'];
      }
      return ['bg-gray-200', 'cursor-not-allowed'];
    }) 
    const cssInvalidInput = computed(() => {
      return {
        'border-red-200': hasError.value, 
        'bg-red-50': hasError.value
      }
    });

    const verifyCaptchaResponse = function (isValid: boolean) {
      if (isValid) {
        isHuman.value = true;
        return;
      }
      isHuman.value = false;
      return;

    };
    const captchaFailed = () => {
      isHuman.value = false;
      console.error('Captcha error');
    }

    const captchaExpired = () => {
      isHuman.value = false;
    };

    const solicitarPassword = function () {
      hasError.value = false;
      displayInfoMsg.value = false;
      if (!canSendForm.value) {
        return;
      }
      if (correo.value.length === 0){
        hasError.value = true;
        errorMsg.value = 'Ingrese correo';
        return;
      }
      isLoading.value = true;
      resetPass(correo.value)
      .then(() => {
        displayInfoMsg.value = true;
      })
      .catch((err) => {
        const errCode = err.response.status;
        if (errCode === 422) {
          hasError.value = true;
          errorMsg.value = err.response.data.error;
        }
      })
      .finally(() => {
        isLoading.value = false;
      })
    };

    return {
      correo,
      hasError,
      errorMsg,
      displayInfoMsg,
      cssInvalidInput,
      colorButton,
      isLoading,
      key,
      verifyCaptchaResponse,
      captchaFailed,
      captchaExpired,
      solicitarPassword
    }
  },
})
</script>
