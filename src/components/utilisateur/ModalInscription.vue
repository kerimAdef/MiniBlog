<template>
  <q-card style="width: 700px; max-width: 80vw;">
    <q-card-section>
      <div class="text-h6" style="color: black">Inscription</div>
    </q-card-section>
    <q-form @submit="submitInscriptionForm">
    <q-card-section style="background-color: aliceblue">
      <q-input filled label="Nom" v-model="nom"  lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"/>
      <q-input filled label="Prénom" v-model="prenom" />
      <q-input filled type="number" label="Âge" v-model="age" />
      <q-input filled label="Adresse e-mail" v-model="email" />
      <q-input filled type="password" label="Mot de passe" v-model="password" />
    </q-card-section>

    <q-card-actions>
      <q-btn color="primary" label="S'inscrire" type="submit"/>
      <q-btn color="secondary" label="Fermer" v-close-popup/>
    </q-card-actions>
  </q-form>
  </q-card>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  data() {
    return {
      session: true,
      email: ref(""),
      password: ref(""),
      nom: ref(""),
      prenom: ref(""),
      age: ref(null),

    };
  },
  methods: {
    submitInscriptionForm() {
      console.log("Formulaire d'inscription soumis !");
      this.closeInscriptionModal();
    },
  },
});
</script>
