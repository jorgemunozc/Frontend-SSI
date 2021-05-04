import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import Test from "@/views/TestView.vue";

const router = createRouter({
history: createWebHistory(),
routes: [
    {
        path: '/',
        component: Test
    },
    {
        name: 'test',
        path: '/test',
        component: () => import('@/views/Login.vue')
    },
    {
        name: 'registro',
        path: '/registro',
        component: () => import('@/views/FormularioRegistro.vue')
    },
    {
        path: '/ver-solicitudes',
        component: () => import('@/views/admin/VerSolicitudes.vue')
    }
],
});

export default router;