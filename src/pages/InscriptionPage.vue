<template>
<q-layout view="lHh Lpr lFf">
<q-page-container>
  <q-page>
  <div class="q-pa-md">
    <div class="q-gutter-md">

      <q-input filled label="Nom" v-model="nom" />
      <q-input filled label="Prénom" v-model="prenom" />
      <q-input filled type="number" label="Âge" v-model="age" />
      <q-input filled label="Adresse e-mail" v-model="email" />
      <q-input filled type="password" label="Mot de passe" v-model="password" />
      <q-btn color="secondary" glossy label="S'inscrire" @click="submitForm" />
    </div>
  </div>
  </q-page>
  </q-page-container>
</q-layout>
</template>

<script>

export default {
  data() {
    return {
      nom: "",
      prenom: "",
      email: "",
      password: "",
      age: null,
    };
  },
  methods: {
    submitForm() {
      console.log("Formulaire soumis !");
    },
  },
};
</script>



