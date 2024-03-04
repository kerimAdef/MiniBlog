<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="justify-between">
        <q-btn flat round dense icon="menu" />
        <q-toolbar-title> MAD blog </q-toolbar-title>

        <!-- Bouton Inscription -->
        <q-btn
          color="secondary"
          glossy
          label="Inscription"
          class="q-mr-md"
          @click="openInscriptionModal"
        />

        <!-- Bouton Connexion -->
        <q-btn
          color="secondary"
          glossy
          label="Connexion"
          @click="openLoginModal"
        />
      </q-toolbar>
    </q-header>

    <!-- Votre contenu ici -->
    <q-page-container>
      <q-page class="">
        <div>
          <q-carousel arrows animated v-model="slide" height="400px">
            <q-carousel-slide name="first" img-src="/image/imagefont.jpeg">
              <div class="absolute-bottom custom-caption">
                <div
                  class="text-h3 text-center q-pa-lg q-ml-xl q-mr-xl"
                  style="color: cyan"
                >
                  MAD blog - Explorez, Découvrez, Partagez : Bienvenue dans
                  notre Univers !
                </div>
                <div
                  class="text-subtitle1 text-center q-pa-xl q-pb-xl"
                  style="color: cyan"
                >
                  Découvrez un univers riche en contenu et en diversité sur
                  notre blog ! Que vous soyez passionné de technologie, amateur
                  de cuisine, adepte de voyages ou curieux de découvrir de
                  nouvelles tendances, notre plateforme vous propose une
                  multitude d'articles captivants.
                </div>

                <div class="q-gutter-sm">
                  <!-- Réduisez l'espace en utilisant des classes de marge de Quasar -->
                  <q-btn
                    push
                    color="secondary"
                    glossy
                    label="Voir articles"
                    @click="goToAcceuilPage"
                    class="q-mb-md"
                  />
                </div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="second"
              img-src="https://cdn.quasar.dev/img/parallax1.jpg"
            >
              <div class="absolute-bottom custom-caption">
                <div class="text-h2">Second stop</div>
                <div class="text-subtitle1">Famous City</div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="third"
              img-src="https://cdn.quasar.dev/img/parallax2.jpg"
            >
              <div class="absolute-bottom custom-caption">
                <div class="text-h2">Third stop</div>
                <div class="text-subtitle1">Famous Bridge</div>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </q-page>
    </q-page-container>

    <!-- Modal de connexion -->
    <q-dialog v-model="loginModalVisible">
      <div class="q-dialog-inner">
        <div class="q-dialog-title" style="color: antiquewhite">Connexion</div>
        <div class="q-dialog-content" style="background-color: aliceblue">
          <!-- Votre formulaire de connexion -->
          <q-input filled label="Adresse e-mail" v-model="email" />
          <q-input
            filled
            type="password"
            label="Mot de passe"
            v-model="password"
          />
        </div>
        <div class="q-dialog-actions">
          <q-btn
            color="primary"
            label="Se connecter"
            @click="submitLoginForm"
          />
          <q-btn color="secondary" label="Fermer" @click="closeLoginModal" />
        </div>
      </div>
    </q-dialog>

    <!-- Modal d'inscription -->
    <q-dialog v-model="inscriptionModalVisible">
      <div class="q-dialog-inner" style="width: 500px; height: 500px">
        <div class="q-dialog-title" style="color: antiquewhite">
          Inscription
        </div>
        <div class="q-dialog-content" style="background-color: aliceblue">
          <!-- Votre formulaire d'inscription -->
          <q-input filled label="Nom" v-model="nom" />
          <q-input filled label="Prénom" v-model="prenom" />
          <q-input filled type="number" label="Âge" v-model="age" />
          <q-input filled label="Adresse e-mail" v-model="email" />
          <q-input
            filled
            type="password"
            label="Mot de passe"
            v-model="password"
          />
        </div>
        <div class="q-dialog-actions">
          <q-btn
            color="primary"
            label="S'inscrire"
            @click="submitInscriptionForm"
          />
          <q-btn
            color="secondary"
            label="Fermer"
            @click="closeInscriptionModal"
          />
        </div>
      </div>
    </q-dialog>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const router = useRouter();
    const loginModalVisible = ref(false); // Variable pour contrôler la visibilité du modal
    const inscriptionModalVisible = ref(false); // Variable pour contrôler la visibilité du modal
    const email = ref(""); // Variable pour stocker l'e-mail
    const password = ref(""); // Variable pour stocker le mot de passe
    const nom = ref(""); // Variable pour stocker le nom
    const prenom = ref(""); // Variable pour stocker le prénom
    const age = ref(null); // Variable pour stocker l'âge

    const goToInscriptionPage = () => {
      router.push("/inscription");
    };

    const goToConnexionPage = () => {
      router.push("/connexion");
    };

    const openLoginModal = () => {
      loginModalVisible.value = true; // Ouvrir le modal de connexion
    };

    const closeLoginModal = () => {
      loginModalVisible.value = false; // Fermer le modal de connexion
    };

    const openInscriptionModal = () => {
      inscriptionModalVisible.value = true; // Ouvrir le modal d'inscription
    };

    const closeInscriptionModal = () => {
      inscriptionModalVisible.value = false; // Fermer le modal d'inscription
    };

    const goToAcceuilPage = () => {
      router.push("/acceuil");
    };

    const submitLoginForm = () => {
      console.log("Formulaire de connexion soumis !");
      // Vous pouvez ajouter ici la logique pour traiter le formulaire de connexion
      // et éventuellement fermer le modal une fois le traitement terminé
      closeLoginModal();
    };

    const submitInscriptionForm = () => {
      console.log("Formulaire d'inscription soumis !");
      // Vous pouvez ajouter ici la logique pour traiter le formulaire d'inscription
      // et éventuellement fermer le modal une fois le traitement terminé
      closeInscriptionModal();
    };

    return {
      goToAcceuilPage,
      goToInscriptionPage,
      goToConnexionPage,
      openLoginModal,
      closeLoginModal,
      openInscriptionModal,
      closeInscriptionModal,
      loginModalVisible,
      inscriptionModalVisible,
      email,
      password,
      nom,
      prenom,
      age,
      submitLoginForm,
      submitInscriptionForm,
      slide: ref("first"),
    };
  },
});
</script>
