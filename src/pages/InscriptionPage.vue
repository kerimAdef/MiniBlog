<template>
  <q-dialog v-model="inscriptionModalVisible">
    <div class="q-dialog-inner">
      <div class="q-dialog-title" style="color: antiquewhite">Inscription</div>
      <div class="q-dialog-content" style="background-color: aliceblue">
        <!-- Votre formulaire d'inscription -->
        <q-input filled label="Nom" v-model="nom" />
        <q-input filled label="Prénom" v-model="prenom" />
        <q-input filled type="number" label="Âge" v-model="age" />
        <q-input filled label="Adresse e-mail" v-model="email" />
        <q-input filled type="password" label="Mot de passe" v-model="password" />
      </div>
      <div class="q-dialog-actions">
        <q-btn color="primary" label="S'inscrire" @click="submitForm" />
        <q-btn color="secondary" label="Fermer" @click="closeInscriptionModal" />
      </div>
    </div>
  </q-dialog>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "InscriptionModal",

  setup() {
    const inscriptionModalVisible = ref(false); // Variable pour contrôler la visibilité du modal

    const openInscriptionModal = () => {
      inscriptionModalVisible.value = true; // Ouvrir le modal d'inscription
    };

    const closeInscriptionModal = () => {
      inscriptionModalVisible.value = false; // Fermer le modal d'inscription
    };

    const submitForm = () => {
      console.log("Formulaire d'inscription soumis !");
      // Logique pour soumettre le formulaire d'inscription
      // Vous pouvez ajouter ici la logique pour traiter le formulaire d'inscription
      // et éventuellement fermer le modal une fois le traitement terminé
      closeInscriptionModal();
    };

    return {
      openInscriptionModal,
      closeInscriptionModal,
      inscriptionModalVisible,
      nom: "",
      prenom: "",
      email: "",
      password: "",
      age: null,
      submitForm,
    };
  },
});
</script>
