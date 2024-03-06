import { createRouter, createWebHistory } from 'vue-router'
const routes = [

  {
    path: '/',
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "index",
        name:"homePage",
        component: () => import('pages/IndexPage.vue') },
      {
        path: "profile",
        name: "profile",
        component: () => import("../pages/ProfilePage.vue"),
      },
      {
        path: "article",
        name: "article",
        component: () => import("../pages/ArticlePage.vue"),
      },
      {
        path: "messenger",
        name: "messenger",
        component: () => import("../pages/MessengerPage.vue"),
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default routes
