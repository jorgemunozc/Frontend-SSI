<template>
  <div class="alert-footer container fixed bottom-0">
    <input :value="isOpen" @input="$emit('update:isOpen')" type="checkbox" id="footeralert" class="hidden" />
    <div
      class="
        flex
        items-center
        justify-between
        w-full
        p-2
        shadow
        text-white
      "
      :class="type === 'error'? 'bg-red-700': 'bg-green-700'"
    >
      <span class="flex-grow text-center">{{ mensaje }}</span>
      <label class="close cursor-pointer" title="close" for="footeralert">
        <svg
          class="fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path
            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
          ></path>
        </svg>
      </label>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    mensaje: String,
    isOpen: Boolean,
    type: {
      type: String,
      default: 'error'
    }
  },
  emits: ['update:isOpen'],
});
</script>
