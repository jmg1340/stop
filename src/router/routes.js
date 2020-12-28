
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/assignacioPunts',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/pAssignacioPunts.vue') }
    ]
  },
  {
    path: '/categories',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/pCategories.vue') }
    ]
  },
  {
    path: '/respostes',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/pRespostes.vue') }
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
