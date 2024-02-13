<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <!-- Vos champs de formulaire ici -->
      <q-input filled label="Nom" v-model="nom" />
      <q-input filled label="Prénom" v-model="prenom" />
      <q-input filled type="number" label="Âge" v-model="age" />
      <q-input filled label="Adresse e-mail" v-model="email" />
      <q-input filled type="password" label="Mot de passe" v-model="password" />
      <q-btn color="secondary" glossy label="S'inscrire" @click="submitForm" />
    </div>
  </div>
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



