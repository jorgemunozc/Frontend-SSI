<template>
  <table class="w-full max-w-4xl xl:mx-auto border">
    <thead class="h-12">
      <tr>
        <!-- <th><input type="checkbox" v-model="isChecked" @checked="checkAll"></th> -->
        <th class="w-3/12 sticky top-0 bg-white border-0 border-r border-gray-300 bg-blue-200 z-20">
          Empresa
        </th>
        <th class="w-4/12 sticky top-0 bg-white border-0 border-r border-gray-300 bg-blue-200 z-20">
          Giro
        </th>
        <th class="w-3/12 sticky top-0 bg-white border-0 border-r border-gray-300 bg-blue-200 z-20">
          Correo
        </th>
        <th class="w-2/12 sticky top-0 bg-white border-0 bg-blue-200 z-20" />
      </tr>
    </thead>
    <tbody>
      <tr v-if="typeof solicitudes == 'undefined' || solicitudes.length === 0">
        <td 
          colspan="4" 
          class="text-center border-0 h-16"
        >
          <span v-show="!isLoading">Sin solicitudes pendientes por procesar.</span>
          <LoadingSpinner v-show="isLoading" />
        </td>
      </tr>
      <tr
        v-for="(solicitud, index) in solicitudes"
        :key="solicitud.id"
        class="hover:bg-gray-200 hover:bg-opacity-50 cursor-default border-b border-t h-12 max-h-12 overflow-y-hidden relative"
      >
        <!-- <td>
          <input type="checkbox" v-model="selectedRows" :value="index">
        </td> -->
        <SolicitudItem
          :solicitud="solicitud"
          @itemChanged:approved="removeItem(index)"
          @itemChanged:rejected="removeItem(index)"
          @newMessage="displayMessage"
        />
      </tr>
    </tbody>
  </table>
  <AlertBase 
    v-if="hasMessage" 
    v-model:isOpen="hasMessage" 
    :mensaje="message" 
    class="container alert-solicitud"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import SolicitudItem from "@/components/solicitudes/SolicitudItem.vue";
import AlertBase from '@/components/AlertBase.vue';
import { listaSolicitudes } from "@/services/SolicitudService";
import LoadingSpinner from "../LoadingSpinner.vue";

export default defineComponent({
  components: {
    SolicitudItem,
    AlertBase,
    LoadingSpinner,
  },
  setup() {
    const solicitudes = ref();
    const message = ref("");
    const hasError = ref(false);
    const hasMessage = ref(false);
    const selectedRows = ref([]);
    // const isChecked = ref();
    const isLoading = ref(false);
    const obtenerSolicitudes = async () => {
      isLoading.value = true;
      solicitudes.value = await listaSolicitudes();
      isLoading.value = false;
    };

    const removeItem = (index) => {
      solicitudes.value.splice(index, 1);
    };

    interface MessageData {
      type: string;
      message: string|{
        [k: string]: string[];
      };
    }

    const displayMessage = (data: MessageData) => {
      hasMessage.value = true;
      let msg = "";
      // console.warn(data)
      if (data.type === "error") {
        hasError.value = true;
        msg += 'ERROR: '
      }
      if (typeof data.message === "object") {
        for (const error in data.message) {
          msg += data.message[error];
        }
      } else {
        msg += data.message;
      }
      message.value = msg;
    };

    
    return {
      solicitudes,
      message,
      hasError,
      hasMessage,
      selectedRows,
      // isChecked,
      isLoading,
      obtenerSolicitudes,
      removeItem,
      displayMessage,
    };
  },
  mounted() {
    this.obtenerSolicitudes();
  },
});
</script>

<style scoped>
  .alert-solicitud {
    left: 50%;
    transform: translate(-50%,0);
  }
</style>