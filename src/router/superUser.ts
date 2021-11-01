import { RouteRecordRaw } from "vue-router";
import VerEmpresas from '@/views/admin/VerEmpresas.vue';
import Dashboard from '@/views/admin/Dashboard.vue';
import VerFormulario from '@/views/admin/VerFormulario.vue';

const routes: Array<RouteRecordRaw> = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true,
      onlySuperUser: true,
      title: "Panel Principal"
    }
  },
  {
    path: '/ver-empresas',
    component: VerEmpresas,
    meta: {
      requiresAuth: true,
      onlySuperUser: true,
      title: 'Ver Empresas'
    }
  },
  {
    path: '/control/ver-f29/:folio',
    component: VerFormulario,
    meta: {
      requiresAuth: true,
      onlySuperUser: true,
      title: 'Ver Formulario'
    }
  },
];

function getSuperUserRoutes(): Array<RouteRecordRaw> {
  return routes;
}

export default getSuperUserRoutes;