<template>
  <q-layout view="hHh Lpr lff">
    <q-header>
      <q-toolbar class="justify-between">
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title> MAD blog </q-toolbar-title>

        <!-- Bouton Inscription -->
        <div v-if="session">
          <q-btn
            color="secondary"
            glossy
            label="Inscription"
            class="q-mr-md"
            @click="ModalInscription= true"
          />

          <!-- Bouton Connexion -->
          <q-btn
            color="secondary"
            glossy
            label="Connexion"
            @click="ModalConnexion=true"
          />
        </div>
        <div v-else>
          <q-btn :to="{ name: 'profile' }" glossy icon="person" />
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="500">
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <q-item clickable v-ripple :to="{ name: 'homePage' }">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section> Acceuil </q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'profile' }">
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>
            <q-item-section> Profile </q-item-section>
          </q-item>

          <q-item clickable v-ripple :to="{ name: 'article' }">
            <q-item-section avatar>
              <q-icon name="article" />
            </q-item-section>

            <q-item-section> Articles </q-item-section>
          </q-item>

          <q-item clickable v-ripple :to="{ name: 'messenger' }">
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section> Send </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-footer class="absolute-bottom q-mt-xl">
      <div class="row items-center justify-center">
        <div>
          <p>© 2024 MAD Blog. Tous droits réservés.</p>
        </div>
      </div>
    </q-footer>
    <q-page-container
      style="
        padding-bottom: 0 !important;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      "
    >
      <router-view />

    </q-page-container>
    <q-dialog v-model="ModalInscription">
      <ModalInscription />
    </q-dialog>
    <q-dialog v-model="ModalConnexion">
      <ModalConnexion />
    </q-dialog>


  </q-layout>
</template>

<script>
import { ref } from "vue";
import ModalInscription from "../components/utilisateur/ModalInscription.vue";
import ModalConnexion from "../components/utilisateur/ModalConnexion.vue";

export default {
  components: {
    ModalInscription,
    ModalConnexion,
  },
  data() {
    return {
      session: true,
      ModalInscription: false,
      ModalConnexion: false,
      drawer: false,
      miniState: ref(false),
    };
  },
  methods: {
    drawerClick(e) {
      if (this.miniState) {
        this.miniState.value = false;
        e.stopPropagation();
      }
    },
  },
};
</script>
