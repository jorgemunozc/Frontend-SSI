import { createRouter, createWebHistory } from "vue-router";
import isLoggedIn from '@/auth/isLoggedIn';
import isAdmin from '@/auth/isAdmin';

import Test from "@/views/TestView.vue";
import Footer from '@/components/Footer.vue';
import Login from '@/views/Login.vue';
import NotFound from '@/views/errors/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: 'login'
        },
        {
            name: 'test',
            path: '/test',
            component: () => import('@/components/empresa/Credencial.vue'),
        },
        {
            name: 'Registro',
            path: '/registro',
            component: () => import('@/views/FormularioRegistro.vue'),
            meta: {
                isGuest: true,
            }
        },
        {
            name: 'Login',
            path: '/login',
            component: Login,
            meta: {
                isGuest: true,
            }
        },
        {
            name: 'Perfil',
            path: '/home',
            component: () => import('@/views/Home.vue'),
            meta: {
                requiresAuth: true,
            }
        },
        {
            name: 'Dashboard',
            path: '/dashboard',
            component: () => import('@/views/admin/Dashboard.vue'),
            meta: {
                requiresAuth: true,
            }
        },
        {
            name: 'Solicitudes',
            path: '/ver-solicitudes',
            component: () => import('@/views/admin/VerSolicitudes.vue'),
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: '/:pathMatch(.*)',
            component: NotFound,
        }
    ],
});

router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !isLoggedIn()) {
        return { name: 'Login' }
    } else if (to.meta.isGuest && isLoggedIn()) {
        if (isAdmin()) {
            return { name: 'Dashboard' }
        } else {
            return { name: 'Perfil' }
        }
    }
})
export default router;