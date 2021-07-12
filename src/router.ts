import { createRouter, createWebHistory } from "vue-router";
import isLoggedIn from '@/auth/isLoggedIn';
import isAdmin from '@/auth/isAdmin';
import F29Acciones from '@/views/f29/F29Acciones.vue';

import Login from '@/views/Login.vue';
import NotFound from '@/views/errors/NotFound.vue';
import NuevoFormulario from '@/views/f29/NuevoFormulario.vue';
import F29Comprobante from '@/views/f29/F29Comprobante.vue';
import F29Consulta from '@/views/f29/F29Consulta.vue';
import store from "./store";

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
            component: () => import('@/views/f29/F29Acciones.vue'),
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
            path: '/f29',
            component: F29Acciones,
            meta: {
                requiresAuth: true,
            }
        },
        {
            name: 'Seleccion Periodo',
            path: '/f29-declarar-seleccion',
            component: () => import('@/views/f29/SeleccionarPeriodo.vue'),
            meta: {
                requiresAuth: true,
            }
        },
        {
            name: 'Nuevo F29',
            path: '/nuevo-f29',
            component: NuevoFormulario,
            meta: {
                requiresAuth: true,
            },
            props: route => ({ month: route.query.month, year: route.query.year})
        },
        {
            name: 'Consulta F29',
            path: '/f29-consulta',
            component: F29Consulta,
            meta: {
                requiresAuth: true,
            }
        },
        {
            name: 'Ver F29',
            path: '/ver-f29',
            component: () => import('@/views/f29/MostrarFormulario.vue'),
            props: route => ({ month: route.query.month, year: route.query.year})
        },
        {
            path: '/f29-comprobante',
            component: F29Comprobante,
            meta: {
                requiresAuth: true,
            },
            beforeEnter: (to, from) => {
                if (store.state.folio === 0) {
                    return {name: 'Seleccion Periodo'}
                }
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