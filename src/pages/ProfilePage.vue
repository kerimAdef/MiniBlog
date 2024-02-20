<template>
  <div class="q-pa-md" style="max-width: 600px; margin: auto;">
    <h2 class="text-h6">Bienvenue sur votre profil</h2>
    <q-form @submit="submitArticle">
      <q-input style="margin-bottom: 20px;" filled v-model="article.title" label="Titre de l'article :" required />
      <q-input style="margin-bottom: 20px;" filled v-model="article.content" label="Contenu de l'article :" type="textarea" rows="5" required />
      <q-uploader
        label="Image :"
        v-model="article.image"
        accept="image/*"
        @add="handleImageUpload"
        color="primary"
        required
        style="margin-bottom: 20px;"
      />
      <q-input style="margin-bottom: 20px;" filled v-model="article.author" label="Auteur :" required />
      <q-input style="margin-bottom: 20px;" filled v-model="article.date" label="Date :" type="date" required />
      <q-btn type="submit" label="Publier" color="primary" class="q-mt-md" />
    </q-form>
  </div>
</template>

<script>
// Importer les fonctions Firebase nécessaires
import { getFirestore, collection, addDoc } from "firebase/firestore";

export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      article: {
        title: '',
        content: '',
        image: null,
        author: '',
        date: ''
      }
    };
  },
  methods: {
    handleImageUpload(file) {
      // Code pour gérer le téléchargement de l'image
      console.log('Image téléchargée :', file);
    },
    async submitArticle() {
      // Ajouter l'article à Firestore
      await this.addArticleToFirestore();
      // Réinitialiser les champs du formulaire après l'ajout
      this.resetForm();
    },
    async addArticleToFirestore() {
      try {
        // Récupérer une référence à la collection "articles" dans Firestore
        const db = getFirestore();
        const articlesCollection = collection(db, "articles");

        // Ajouter le nouvel article à la collection Firestore
        await addDoc(articlesCollection, {
          title: this.article.title,
          content: this.article.content,
          author: this.article.author,
          date: this.article.date,
        });

        console.log("Article ajouté à Firestore avec succès !");
      } catch (error) {
        console.error("Erreur lors de l'ajout de l'article à Firestore :", error);
      }
    },
    resetForm() {
      // Réinitialiser les champs du formulaire après l'ajout
      this.article.title = '';
      this.article.content = '';
      this.article.image = null;
      this.article.author = '';
      this.article.date = '';
    }
  }
};
</script>
