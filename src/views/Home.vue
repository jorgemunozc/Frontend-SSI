<template>
    <div class="ui">
        <h1 class="row">PERFIL EMPRESA</h1>
        <div>
            <Navbar />
        </div>
        <InfoBasica />
    </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, ref, watch } from 'vue';
import InfoBasica from "@/components/empresa/InfoBasica.vue";
import Navbar from '@/components/Navbar.vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    components: {
        InfoBasica,
        Navbar,
    },
})
</script>
