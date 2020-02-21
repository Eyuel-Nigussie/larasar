
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      // Public Routes
      {
        path: '/',
        name: 'public.index',
        component: () => import('pages/Index.vue'),
        meta: { requiresAuth: false }
      },
      {
        path: '/login',
        name: 'public.login',
        component: () => import('pages/auth/login'),
        meta: { requiresAuth: false }
      },
      {
        path: '/register',
        name: 'public.register',
        component: () => import('pages/auth/register'),
        meta: { requiresAuth: false }
      },
      {
        path: '/password/reset',
        name: 'public.password.reset',
        component: () => import('pages/auth/password/email'),
        meta: { requiresAuth: false }
      },
      {
        path: '/password/reset/:token',
        name: 'public.password.reset.token',
        component: () => import('pages/auth/password/reset'),
        meta: { requiresAuth: false }
      },
      { path: '/email/verify/:id/:hash',
        name: 'public.verification.verify.id.token',
        component: () => import('pages/auth/login'),
        meta: { requiresAuth: false }
      },
      // Auth Routes
      { path: '/email/verify',
        name: 'auth.verification.verify',
        component: () => import('pages/auth/login'),
        // component: () => import('pages/auth/verification/verify'),
        meta: { requiresAuth: true }
      },
      {
        path: '/profile',
        name: 'auth.profile',
        component: () => import('pages/Profile'),
        meta: { requiresAuth: true }
      },
      {
        path: '/users',
        name: 'auth.users',
        component: () => import('pages/Users'),
        meta: { requiresAuth: true }
      },
      {
        path: '/test',
        name: 'auth.test',
        component: () => import('pages/Test'),
        meta: { requiresAuth: true }
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
