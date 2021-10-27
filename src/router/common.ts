import { RouteRecordRaw } from "vue-router";
import Login from '@/views/Login.vue';
import NotFound from '@/views/errors/NotFound.vue';
import ResetPassword from '@/views/ResetPassword.vue';

const common: Array<RouteRecordRaw> = [
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
    path: '/not-found',
    component: NotFound
  },
  {
      path: '/:pathMatch(.*)',
      component: NotFound,
  }
];

function getCommonRoutes(): Array<RouteRecordRaw> {
  return common;
}

export default getCommonRoutes;