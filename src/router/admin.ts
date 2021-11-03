import { RouteParams, RouteRecordRaw } from "vue-router";

const Dashboard = () => import('@/views/admin/Dashboard.vue');
const PanelDominios = () => import('@/views/admin/PanelDominios.vue');
const VerAuditores = () => import('@/views/admin/VerAuditores.vue');
const CrearAuditor = () => import('@/views/admin/CrearAuditor.vue');
const EditarAuditor = () => import('@/views/admin/EditarAuditor.vue');
const VerAuditor = () => import('@/views/admin/VerAuditor.vue');


function getId(params: RouteParams): number {
  const auditorId = Array.isArray(params.id)? params.id[0] : params.id;
  const id = parseInt(auditorId, 10) || 0;
  return id;
}

const routes: Array<RouteRecordRaw> = [
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
    path: '/auditores',
    component: VerAuditores,
    meta: {
      requiresAuth: true,
      onlyAdmin: true,
      title: "Ver Auditores"
    },
    children: [
      // {
      //   path: '',
      //   component: AuditoresList
      // },
      {
        path: 'nuevo',
        component: CrearAuditor
      },
      {
        path: 'editar/:id',
        component: EditarAuditor,
        props: ({params}) => ({id: getId(params)} )
      },
      {
        path: 'ver/:id',
        component: VerAuditor,
        props: ({params}) => ({id: getId(params)})
      }
    ]
  }
];

function getAdminRoutes(): Array<RouteRecordRaw> {
  return routes;
}

export default getAdminRoutes;