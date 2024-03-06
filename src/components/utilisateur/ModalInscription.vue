<template>
  <q-card>
    <q-card-section>
      <div class="text-h6" style="color: antiquewhite">Inscription</div>
    </q-card-section>

    <q-card-section style="background-color: aliceblue">
      <!-- Votre formulaire d'inscription -->
      <q-input filled label="Nom" v-model="nom" />
      <q-input filled label="Prénom" v-model="prenom" />
      <q-input filled type="number" label="Âge" v-model="age" />
      <q-input filled label="Adresse e-mail" v-model="email" />
      <q-input filled type="password" label="Mot de passe" v-model="password" />
    </q-card-section>

    <q-card-actions>
      <q-btn color="primary" label="S'inscrire" @click="submitInscriptionForm" />
      <q-btn color="secondary" label="Fermer" @click="closeInscriptionModal" />
    </q-card-actions>
  </q-card>
</template>
