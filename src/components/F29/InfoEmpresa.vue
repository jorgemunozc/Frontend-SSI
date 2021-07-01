<template>
  <table>
    <thead>
      <tr>
        <td class="celda-codigo">1</td>
        <th class="f29__info__header">Apellido Paterno o Raz&oacute;n Social</th>
        <td class="celda-codigo">2</td>
        <th class="f29__info__header">Apellido Materno</th>
        <td class="celda-codigo">5</td>
        <th class="f29__info__header">Nombres</th>
      </tr>
      <tr class="f29__seccion__subheader">
        <td colspan="2">{{ razonSocial }}</td>
        <td colspan="2"></td>
        <td colspan="2"></td>
      </tr>
    </thead>
  </table>
</template>
<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  props: {
    razonSocial: String,

  }
});
</script>
