<template>
  <Dropdown
    v-model="selected"
    :options="giros"
    :filter="true"
    :show-clear="true"
    option-label="giro"
    option-value="giro"
    placeholder="Seleccione un giro"
  />
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";
import { getGiros } from "@/services/GiroService";

export default defineComponent({
  name: "GirosDropdown",
  setup() {
    const giros = ref();
    const selected = ref();
    const loadGiros = async () => {
      giros.value = await getGiros().then((res) => res);
    };
    return {
      giros,
      selected,
      loadGiros,
    };
  },

  mounted() {
    this.loadGiros();
  },
});
</script>

<style lang="scss">
.p-dropdown .p-dropdown-clear-icon {
  color: rgb(214, 21, 21);
}

.p-dropdown-panel {
  width: 1px; //min size mobile
}

// .p-dropdown-label,
.p-dropdown-panel {
  font-size: 0.8rem;
}
</style>