import { RouteRecordRaw } from "vue-router";
const VerEmpresas = () => import('@/views/admin/VerEmpresas.vue');
const Dashboard = () => import('@/views/admin/Dashboard.vue');
const VerFormulario = () => import('@/views/admin/VerFormulario.vue');

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