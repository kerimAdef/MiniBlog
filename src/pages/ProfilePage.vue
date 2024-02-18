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
    submitArticle() {
      // Code pour soumettre l'article
      console.log('Article soumis :', this.article);
      this.publishArticle();
    },
    publishArticle() {
      const newArticle = {
        id: this.posts.length + 1, // ID unique pour le nouvel article
        title: this.article.title,
        author: this.article.author,
        authorAvatarUrl: '/path/to/author/avatar',
        date: this.article.date,
        content: this.article.content
      };

      // Créez une copie des articles existants
      const updatedPosts = [...this.posts];

      // Ajoutez le nouvel article à la copie
      updatedPosts.push(newArticle);

      // Émettez un événement pour notifier la page d'accueil du nouvel article
      this.$emit('new-article', newArticle);

      // Utilisez $emit pour mettre à jour les articles dans le composant parent
      this.$emit('update:posts', updatedPosts);
    }
  }
};
</script>
