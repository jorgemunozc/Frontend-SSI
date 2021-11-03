<template>
  <div class="f29__header">
    <div class="f29__header__item">
      <div
        colspan="3"
        class="f29__seccion__header"
      >
        PERIODO TRIBUTARIO
      </div>
      <table>
        <tr>
          <td
            rowspan="2"
            class="celda-codigo"
          >
            15
          </td>
          <td>MES</td>
          <td>AÑO</td>
        </tr>
        <tr>
          <td>{{ month }}</td>
          <td>{{ year }}</td>
        </tr>
      </table>
    </div>

    <div class="f29__header__item">
      <div class="f29__seccion__header">
        ROL UNICO TRIBUTARIO
      </div>

      <table>
        <tr>
          <td class="celda-codigo">
            3
          </td>
          <td>{{ rut }}</td>
        </tr>
      </table>
    </div>

    <div class="f29__header__item folio">
      <div class="f29__seccion__header">
        FOLIO
      </div>

      <table>
        <tr>
          <td class="celda-codigo">
            7
          </td>
          <td><span v-if="folio > 0">{{ folio }}</span></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    folio: {
      type: Number,
      default: 0,
    },
    rut: {
      type: String,
      required: true
    },
    month: {
      type: Number,
      required: true
    },
    year: {
      type: Number,
      required: true
    }, 
  }
})
</script>
