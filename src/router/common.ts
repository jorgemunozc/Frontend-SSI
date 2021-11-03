import { RouteRecordRaw } from "vue-router";
const Login = () => import('@/views/Login.vue');
const NotFound = () => import('@/views/errors/NotFound.vue');
const ResetPassword = () => import('@/views/ResetPassword.vue');
const FormularioRegistro = () => import('@/views/FormularioRegistro.vue');

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
    component: FormularioRegistro,
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