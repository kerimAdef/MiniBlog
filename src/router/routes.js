import { createRouter, createWebHistory } from 'vue-router'
import Inscription from '../pages/InscriptionPage.vue'
import Connexion from '../pages/ConnexionPage.vue'
import Acceuil from '../pages/AcceuilPage.vue'
import Profile from '../pages/ProfilePage.vue'
const routes = [
  {
    path: '/inscription',
    name: 'Inscription',
    component: Inscription
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: Connexion
  },
  {
    path: '/acceuil',
    name: 'Acceuil',
    component: Acceuil
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/',
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
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default routes
