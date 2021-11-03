import { RouteRecordRaw } from "vue-router";
import store from "../store/f29.module";

const F29Acciones = () => import('@/views/f29/F29Acciones.vue');
const NuevoFormulario = () => import('@/views/f29/NuevoFormulario.vue');
const F29Comprobante = () => import('@/views/f29/F29Comprobante.vue');
const F29Consulta = () => import('@/views/f29/F29Consulta.vue');
const VerCredencial = () => import('@/views/VerCredencial.vue');
const SeleccionarPeriodo = () => import('@/views/f29/SeleccionarPeriodo.vue');

const routes: Array<RouteRecordRaw> = [
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
    component: SeleccionarPeriodo,
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
    props: route => ({ month: route.query.month, year: route.query.year })
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
    props: route => ({ month: route.query.month, year: route.query.year }),
    beforeEnter: () => {
      if (store.state.folio === 0) {
        return { name: 'Consulta F29' }
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
        return { name: 'Seleccion Periodo' }
      }
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
];

function getEmpresasRoutes(): Array<RouteRecordRaw> {
  return routes;
}

export default getEmpresasRoutes;