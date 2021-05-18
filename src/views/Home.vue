<template>
    <div class="row">
        <div class="three wide column">
            <Navbar />
        </div>
        <div class="ui twelve wide column grid">
            <div >
                <h1 class="ui blue header">PERFIL EMPRESA</h1>
            </div>
            <InfoBasica />
        </div>
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
