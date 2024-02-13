<template>
  <div class="q-pa-md d-flex justify-center align-center" style="height: 100vh;">
    <div class="form-content q-gutter-md">
      <!-- Vos champs de formulaire ici -->
      <q-input filled label="Adresse e-mail" v-model="email" />
      <q-input filled type="password" label="Mot de passe" v-model="password" />

      <q-btn color="secondary" glossy label="S'inscrire" @click="submitForm" />
      <a href="#" class="q-my-md q-mb-md text-xs">Mot de passe oublié ?</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      // Logique pour soumettre le formulaire
      console.log("Formulaire de connexion soumis !");
    },
  },
};
</script>
