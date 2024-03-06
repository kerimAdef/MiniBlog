<template>
  <q-card>
    <q-card-section>
      <div class="text-h6" style="color: antiquewhite">Connexion</div>
    </q-card-section>

    <q-card-section style="background-color: aliceblue">
      <!-- Votre formulaire d'inscription -->
      <q-input filled label="Adresse e-mail" v-model="email" />
        <q-input
          filled
          type="password"
          label="Mot de passe"
          v-model="password"
        />
    </q-card-section>

    <q-card-actions>
      <q-btn color="primary" label="S'inscrire" @click="submitInscriptionForm" />
      <q-btn color="secondary" label="Fermer" @click="closeInscriptionModal" />
    </q-card-actions>
  </q-card>
</template>
<script>
export default {
  components :{
    ModalInscription,
  },
  data() {
    return {
      session: true,
      ModalInscription:false,
    };
  },
  setup () {
    const slide = ref("first");
    const miniState = ref(false);
    const loginModalVisible = ref(false);
    const inscriptionModalVisible = ref(false);


    const openLoginModal = () => {
      loginModalVisible.value = true;
    };

    const closeLoginModal = () => {
      loginModalVisible.value = false;
    };

    const openInscriptionModal = () => {
      inscriptionModalVisible.value = true;
    };

    const closeInscriptionModal = () => {
      inscriptionModalVisible.value = false;
    };

    return {
      slide,
      openLoginModal,
      closeLoginModal,
      openInscriptionModal,
      closeInscriptionModal,
      loginModalVisible,
      inscriptionModalVisible,
      drawer: ref(false),
      miniState,

      drawerClick (e) {

        if (miniState.value) {
          miniState.value = false
          e.stopPropagation()
        }
      }
    }
  },

};
</script>

