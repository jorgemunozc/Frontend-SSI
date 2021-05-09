<template>
    <h1>ADMIN</h1>
    <router-view></router-view>
    <router-view name="a"></router-view>
    <router-view name="footer"></router-view>
</template>
<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    setup() {
        
    },
})
</script>
