import { createRouter, createWebHistory } from "vue-router";
import Test from "@/views/TestView.vue";

import Navbar from '@/components/Navbar.vue';
import PanelDominios from '@/views/admin/PanelDominios.vue';
import Footer from '@/components/Footer.vue';

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
        path: '/login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/home/:rut',
        component: () => import('@/views/Home.vue'),
        props: true
    },
    {
        path: '/dashboard',
        components: {
            default: PanelDominios,
            a: Navbar,
            footer: Footer,
        }
    },
    {
        path: '/ver-solicitudes',
        component: () => import('@/components/solicitudes/SolicitudesList.vue')
    },
],
});

export default router;