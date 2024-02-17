<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="justify-between">
        <q-btn flat round dense icon="menu" />
        <q-toolbar-title> MAD blog </q-toolbar-title>

        <!-- Bouton Inscription -->
        <q-btn color="secondary" glossy label="Inscription" class="q-mr-md" @click="goToInscriptionPage" />

        <!-- Bouton Connexion -->
        <q-btn color="secondary" glossy label="Connexion" @click="goToConnexionPage" />
      </q-toolbar>
    </q-header>

    <!-- Votre contenu ici -->
    <q-page-container>
      <q-page class="q-pa-md" style="background-image: url('/image/imagefont.jpeg'); background-size: cover;">
        <div>
          <h3 style="color:cyan;">MAD blog - Explorez, Découvrez, Partagez : Bienvenue dans notre Univers !</h3>
          <p style="color:cyan;">Découvrez un univers riche en contenu et en diversité sur notre blog ! Que vous soyez passionné de technologie, amateur de cuisine, adepte de voyages ou curieux de découvrir de nouvelles tendances, notre plateforme vous propose une multitude d'articles captivants. Plongez dans des sujets variés, allant de conseils pratiques à des réflexions profondes, et explorez les thématiques qui vous passionnent. Avec des contributeurs talentueux et une communauté engagée, notre blog est une source inépuisable d'inspiration et d'enrichissement. Que vous soyez à la recherche d'informations, de divertissement ou de discussions stimulantes, vous trouverez forcément votre bonheur parmi nos articles. Rejoignez-nous et partagez vos découvertes, expériences et opinions avec une communauté aussi passionnée que vous !</p>
        </div>
        <div class="q-gutter-sm">
          <!-- Réduisez l'espace en utilisant des classes de marge de Quasar -->
          <q-btn push color="secondary" glossy label="Voir articles" @click="goToAcceuilPage" class="q-mb-md" />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const router = useRouter();

    const goToInscriptionPage = () => {
      router.push("/inscription");
    };

    const goToConnexionPage = () => {
      router.push("/connexion");
    };
    const goToAcceuilPage= () => {
      router.push("/acceuil");
    };

    return {
      goToAcceuilPage,
      goToInscriptionPage,
      goToConnexionPage,
    };
  },
});
</script>
