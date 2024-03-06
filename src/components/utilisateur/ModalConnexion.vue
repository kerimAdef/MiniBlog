<template>
  <q-card style="width: 700px; max-width: 80vw;">
    <q-card-section>
      <div class="text-h6" style="color: black">Connexion</div>
    </q-card-section>
    <q-form @submit="submitLoginForm">
    <q-card-section style="background-color: aliceblue">
      <q-input filled label="Adresse e-mail" v-model="email"
      lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
      <q-input filled type="password" label="Mot de passe" v-model="password" />
    </q-card-section>

    <q-card-actions>
      <q-btn color="primary" label="Se connecter" type="submit"/>
      <q-btn color="secondary" label="Fermer" v-close-popup />
    </q-card-actions>
  </q-form>
  </q-card>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  data() {
    return {
      email: ref(""),
      password: ref(""),
    };
  },
  methods: {
    submitLoginForm() {
      console.log("Formulaire de connexion soumis !");
      this.$router.push({ name: "homePage" });
      this.closeLoginModal();
    },
  },
});
</script>
