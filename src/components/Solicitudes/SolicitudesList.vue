<template>
  <table class="w-full max-w-4xl">
    <thead>
      <tr>
        <!-- <th><input type="checkbox" v-model="isChecked" @checked="checkAll"></th> -->
        <th class="w-3/12">Empresa</th>
        <th class="w-4/12">Giro</th>
        <th class="w-3/12">Correo</th>
        <th class="w-2/12"/>
      </tr>
    </thead>
    <tbody>
      <tr v-if="typeof solicitudes == 'undefined' || solicitudes.length === 0">
        <td colspan="4" class="text-center">Sin solicitudes pendientes por procesar.</td>
      </tr>
      <tr
        v-for="(solicitud, index) in solicitudes"
        :key="solicitud.id"
        class="hover:bg-gray-100 cursor-default"
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
  <div
    v-if="hasMessage"
    class="ui message"
    :class="{ 'error': hasError }"
  >
    {{ message }}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import SolicitudItem from "@/components/solicitudes/SolicitudItem.vue";
import { listaSolicitudes } from "@/services/SolicitudService";

export default defineComponent({
  components: {
    SolicitudItem,
  },
  setup() {
    const solicitudes = ref();
    const message = ref("");
    const hasError = ref(false);
    const hasMessage = ref(false);
    const selectedRows = ref([]);
    // const isChecked = ref();

    const obtenerSolicitudes = async () => {
      solicitudes.value = await listaSolicitudes();
    };
    const removeItem = (index) => {
      console.log(index);
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
      let displayTime = 2000;
      let msg = "";
      if (data.type === "error") {
        hasError.value = true;
      }
      if (typeof data.message === "object") {
        for (const error in data.message) {
          msg += data.message[error];
        }
      }
      message.value = msg;
      setTimeout(() => {
        hasError.value = false;
        hasMessage.value = false;
        message.value = "";
      }, displayTime);
    };

    
    return {
      solicitudes,
      message,
      hasError,
      hasMessage,
      selectedRows,
      // isChecked,
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
