<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
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
  </q-layout>

  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <!-- Réduisez l'espace en utilisant des classes de marge de Quasar -->
      <q-img src="image/logo.png" />
      <q-img src="image/logo.png" />
      <q-btn push color="secondary" glossy label="Voir les autres pics" @click="refresh" class="q-mb-md" />
    </div>
  </div>
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

    return {
      goToInscriptionPage,
      goToConnexionPage,
    };
  },
});
</script>
