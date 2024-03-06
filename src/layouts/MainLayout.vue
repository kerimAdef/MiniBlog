<template>
  <!-- <q-layout view="lHh Lpr lFf"> -->
    <q-layout view="hHh Lpr lff" container style="height: 300px" class="shadow-2 rounded-borders">

    <q-header>
      <q-toolbar class="justify-between">
        <q-btn flat round dense icon="menu" />
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />

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

    <!-- Votre contenu ici ( toujours faire apparaitre sur le code!!!! important  ) --> 
    <q-page-container>
      <router-view />
    </q-page-container>


    <q-drawer
      v-model="drawer"
      show-if-above

      :mini="!drawer || miniState"
      @click.capture="drawerClick"

      :width="200"
      :breakpoint="500"
      bordered
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
    >
      <template v-slot:mini>
        <q-scroll-area class="fit mini-slot cursor-pointer">
          <div class="q-py-lg">
            <div class="column items-start">
              <q-icon name="inbox" color="blue" class="mini-icon" @click="goToPosts" />
            </div>
          </div>
        </q-scroll-area>
      </template>

      <q-scroll-area class="fit">
        <q-list padding>
          <q-item clickable v-ripple @click="goToPosts">
            <q-item-section>
              Articles
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <!--
        in this case, we use a button (can be anything)
        so that user can switch back
        to mini-mode
      -->
      <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px">
        <q-btn
          dense
          round
          unelevated
          color="accent"
          icon="chevron_left"
          @click="miniState = true"
        />
      </div>
    </q-drawer>

<!-- 
    
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout> -->


    <!-- bloc footer  -->
    <q-footer elevated>
      <div class="row q-pa-xl justify-center items-center">
        <div class="col">
          <q-img
            src="public/image/logo.png"
            spinner-color="white"
            style="height: 125px; max-width: 200px"
            img-class="my-custom-image"
            class="rounded-borders"
          />
        </div>
        <div class="col">
          <b> Coordonnée</b>
          <div class="col-5 q-pt-lg">
            18 rue d'anvers
            <br />
            60 boulevard francois grosso <br />
            10 rue arson <br />
            19 rue messiah
          </div>
        </div>
        <div class="col">
          <b>Navigation</b>
          <div class="col-5 q-pt-lg">
            Acceuil
            <br />
            Nos articles <br />
            Nos engagement <br />
            A propos <br />
            Contactez nous
          </div>
        </div>
      </div>
    </q-footer>
    <!-- bloc de footer 
   Modal de connexion -->
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
