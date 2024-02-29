
const routes = [
  {
    path: "/",
    name: 'Home Page',
    // component: () => import('pages/MainPage.vue')
  // component: () => import('pages/MainPractice.vue')
  component: () => import('pages/ProductsCatalog.vue')
  },
  {
    path: "/products",
    name: 'Products',
    //component: () => import('pages/Mainpage.vue')
   component: () => import('pages/ProductsCatalog.vue')
  },
  {
    path: '/old',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
