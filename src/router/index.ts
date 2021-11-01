import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import isLoggedIn from '@/auth/isLoggedIn';
import isAdmin from '@/auth/isAdmin';
import getEmpresasRoutes from "./empresa";
import getAdminRoutes from "./admin";
import getCommonRoutes from "./common";
import getSuperUserRoutes from "./superUser";
import isSuperUser from "@/auth/checkPermissions";

declare module 'vue-router' {
  interface RouteMeta {
    title?: string,
    requiresAuth?: boolean,
    isGuest?: boolean,
    onlyAdmin?: boolean,
    onlySuperUser?: boolean
  }
}
const DEFAULT_TITLE = 'Servicio Simulado de Impuestos';

const routes: Array<RouteRecordRaw> = [
  ...getEmpresasRoutes(),
  ...getSuperUserRoutes(),
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
  }
  if (to.meta.isGuest && isLoggedIn()) {
      if (isSuperUser()) {
          return { name: 'Dashboard' }
      } else {
          return { name: 'Perfil' }
      }
  }
  if (to.meta.onlyAdmin && !isAdmin()) {
      return { path: '/not-found' }
  }
  if (to.meta.onlySuperUser && !isSuperUser()) {
    return { path: '/not-found' }
  }
})

export default router;