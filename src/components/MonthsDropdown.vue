<template>
  <select
    id="month"
    name="month"
    class="border h-8 px-2"
    :value="modelValue"
    @change="$emit('update:modelValue', Number($event.target.value))"
  >
    <option value="1">
      Enero
    </option>
    <option value="2">
      Febrero
    </option>
    <option value="3">
      Marzo
    </option>
    <option value="4">
      Abril
    </option>
    <option value="5">
      Mayo
    </option>
    <option value="6">
      Junio
    </option>
    <option value="7">
      Julio
    </option>
    <option value="8">
      Agosto
    </option>
    <option value="9">
      Septiembre
    </option>
    <option value="10">
      Octubre
    </option>
    <option value="11">
      Noviembre
    </option>
    <option value="12">
      Diciembre
    </option>
  </select>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    modelValue: {
      type: Number,
      required: true
    }
  },
  emits: ['update:modelValue']
});
</script>