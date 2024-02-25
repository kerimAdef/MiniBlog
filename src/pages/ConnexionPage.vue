<template>
  <div>
    <!-- Bouton de connexion -->
    <q-btn color="primary" label="Se connecter" @click="openLoginModal" />

    <!-- Modal de connexion -->
    <q-dialog v-model="loginModalVisible">
      <!-- Contenu du modal (formulaire de connexion) -->
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginModalVisible: false, // Pour contrôler la visibilité du modal
    };
  },
  methods: {
    openLoginModal() {
      // Ouvrir le modal de connexion
      this.loginModalVisible = true;
    },
  },
};
</script>
