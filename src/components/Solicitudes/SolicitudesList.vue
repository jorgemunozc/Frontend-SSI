<template>
  <SolicitudItem
    :solicitud="solicitud"
    v-for="(solicitud, index) in solicitudes"
    :key="solicitud.id"
    @itemChanged:approved="removeItem(index)"
    @itemChanged:rejected="removeItem(index)"
    @newMessage="displayMessage"
  />
  <div v-if="hasMessage" :class="{ error: hasError }">
    {{ message }}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import SolicitudItem from "@/components/Solicitudes/SolicitudItem.vue";
import { listaSolicitudes } from "@/services/SolicitudService";

export default defineComponent({
  components: {
    SolicitudItem,
  },
  setup() {
    const solicitudes = ref();
    const message = ref("");
    let hasError = ref(false);
    let hasMessage = ref(false);
    const obtenerSolicitudes = async () => {
      solicitudes.value = await listaSolicitudes();
    };
    const removeItem = (index) => {
      console.log(index);
      solicitudes.value.splice(index, 1);
    };

    const displayMessage = (data: {
      type: string;
      message: string | { [k: string]: string[] };
    }) => {
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
      }, displayTime);
    };
    return {
      solicitudes,
      message,
      hasError,
      hasMessage,
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
