import { RouteRecordRaw } from "vue-router";

import Dashboard from '@/views/admin/Dashboard.vue';
import PanelDominios from '@/views/admin/PanelDominios.vue';
import VerEmpresas from '@/views/admin/VerEmpresas.vue';
import VerFormulario from '@/views/admin/VerFormulario.vue';


const routes: Array<RouteRecordRaw> = [
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
    name: 'Gestionar Dominios Correo',
    path: '/dominios-correo',
    component: PanelDominios,
    meta: {
      requiresAuth: true,
      onlyAdmin: true,
      title: 'Administrar Dominio de Correos'
    }
  },
];

function getAdminRoutes(): Array<RouteRecordRaw> {
  return routes;
}

export default getAdminRoutes;