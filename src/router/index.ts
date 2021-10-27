import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import isLoggedIn from '@/auth/isLoggedIn';
import isAdmin from '@/auth/isAdmin';
import getEmpresasRoutes from "./empresa";
import getAdminRoutes from "./admin";
import getCommonRoutes from "./common";

declare module 'vue-router' {
  interface RouteMeta {
    title?: string,
    requiresAuth?: boolean,
    isGuest?: boolean,
    onlyAdmin?: boolean
  }
}
const DEFAULT_TITLE = 'Servicio Simulado de Impuestos';

const routes: Array<RouteRecordRaw> = [
  ...getEmpresasRoutes(),
  ...getAdminRoutes(),
  ...getCommonRoutes()
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

//GLOBAL GUARDS
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