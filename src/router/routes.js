import { createRouter, createWebHistory } from "vue-router";
import Inscription from "../pages/InscriptionPage.vue";
import Connexion from "../pages/ConnexionPage.vue";
import Acceuil from "../pages/AcceuilPage.vue";
import Profile from "../pages/ProfilePage.vue";
const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "inscription",
        name: "Inscription",
        component: () => import("pages/InscriptionPage.vue"),
      },
      {
        path: "connexion",
        name: "Connexion",
        component: () => import("pages/ConnexionPage.vue"),
      },
      {
        path: "accueil",
        name: "Accueil",
        component: () => import("pages/AccueilPage.vue"),
      },
      {
        path: "profile",
        name: "Profile",
        component: () => import("pages/ProfilePage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default routes;
