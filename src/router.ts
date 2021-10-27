import { createRouter, createWebHistory } from "vue-router";
import isLoggedIn from '@/auth/isLoggedIn';
import isAdmin from '@/auth/isAdmin';
import F29Acciones from '@/views/f29/F29Acciones.vue';

import Login from '@/views/Login.vue';
import NotFound from '@/views/errors/NotFound.vue';
import NuevoFormulario from '@/views/f29/NuevoFormulario.vue';
import F29Comprobante from '@/views/f29/F29Comprobante.vue';
import F29Consulta from '@/views/f29/F29Consulta.vue';
import Dashboard from '@/views/admin/Dashboard.vue';
import PanelDominios from '@/views/admin/PanelDominios.vue';
import store from "./store/f29.module";
import VerCredencial from '@/views/VerCredencial.vue';
import VerEmpresas from '@/views/admin/VerEmpresas.vue';
import VerFormulario from '@/views/admin/VerFormulario.vue';
import ResetPassword from '@/views/ResetPassword.vue';

declare module 'vue-router' {
    interface RouteMeta {
        title?: string,
        requiresAuth?: boolean,
        isGuest?: boolean,
        onlyAdmin?: boolean
    }
}

const DEFAULT_TITLE = 'Servicio Simulado de Impuestos';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            name: 'test',
            path: '/test',
            component: () => import('@/views/TestView.vue'),
            meta: {
                requiresAuth: false
            }
        },
        {
            name: 'Registro',
            path: '/registro',
            component: () => import('@/views/FormularioRegistro.vue'),
            meta: {
                isGuest: true,
                title: 'Registro',
            },
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
            path: '/reset',
            component: ResetPassword,
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
                title: 'Mis Datos'
            }
        },
        {
            name: 'Dashboard',
            path: '/dashboard',
            component: Dashboard,
            meta: {
                requiresAuth: true,
                title: "Panel Principal"
            }
        },
        {
            name: 'Solicitudes',
            path: '/ver-solicitudes',
            component: Dashboard,
            meta: {
                requiresAuth: true,
                onlyAdmin: true,
                title: 'Solicitudes de Acceso'
            }
        },
        {
            path: '/f29',
            component: F29Acciones,
            meta: {
                requiresAuth: true,
                title: 'Formulario 29'
            }
        },
        {
            name: 'Seleccion Periodo',
            path: '/f29-declarar-seleccion',
            component: () => import('@/views/f29/SeleccionarPeriodo.vue'),
            meta: {
                requiresAuth: true,
                title: 'Declarar IVA'
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
                title: 'Consulta Impuestos Declarados'
            }
        },
        {
            name: 'Ver F29',
            path: '/ver-f29',
            component: () => import('@/views/f29/MostrarFormulario.vue'),
            props: route => ({ month: route.query.month, year: route.query.year}),
            beforeEnter: () => {
                if (store.state.folio === 0) {
                    return {name: 'Consulta F29'}
                }
            }
        },
        {
            path: '/f29-comprobante',
            component: F29Comprobante,
            meta: {
                requiresAuth: true,
                title: 'Comprobante envío F29'
            },
            beforeEnter: () => {
                if (store.state.folio === 0) {
                    return {name: 'Seleccion Periodo'}
                }
            }
        },
        {
            name: 'Gestionar Dominios Correo',
            path: '/dominios-correo',
            component: PanelDominios,
            meta: {
                requiresAuth: true,
                onlyAdmin: true,
                title: 'Administrar Dominio de Correos'
            }
        },
        {
            name: 'Credencial',
            path: '/mi-credencial',
            component: VerCredencial,
            meta: {
                requiresAuth: true,
                title: 'Credencial Tributaria'
            }
        },
        {
            path: '/ver-empresas',
            component: VerEmpresas,
            meta: {
                requiresAuth: true,
                onlyAdmin: true,
                title: 'Ver Empresas'
            }
        },
        {
            path: '/admin/ver-f29/:folio',
            component: VerFormulario,
            meta: {
                requiresAuth: true,
                onlyAdmin: true,
                title: 'Ver Formulario'
            }
        },
        {
            path: '/not-found',
            component: NotFound
        },
        {
            path: '/:pathMatch(.*)',
            component: NotFound,
        }
    ],
});

router.beforeEach((to) => {
    document.title = to.meta.title || DEFAULT_TITLE;
    if (to.meta.requiresAuth && !isLoggedIn()) {
        return { name: 'Login' }
    } else if (to.meta.isGuest && isLoggedIn()) {
        if (isAdmin()) {
            return { name: 'Dashboard' }
        } else {
            return { name: 'Perfil' }
        }
    }
    if (to.meta.onlyAdmin && !isAdmin()) {
        return { path: '/not-found' }
    }
})

export default router;