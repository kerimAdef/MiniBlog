<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="justify-between">
        <q-btn flat round dense icon="menu" />
        <q-toolbar-title> MAD blog </q-toolbar-title>
        <q-btn flat round dense icon="person" @click="goToProfilePage" />
      </q-toolbar>
    </q-header>

    <!-- Contenu de la page principale -->
    <q-page-container>
      <q-page>
        <q-list bordered separator>
          <q-item
            v-for="post in posts"
            :key="post.id"
            clickable
            @click="openPost(post)"
          >
            <q-item-section>
              <q-item-label>
                <h3>{{ post.title }}</h3>
              </q-item-label>
              <q-item-label>
                {{ post.content }}
              </q-item-label>
              <img :src="post.authorAvatarUrl" alt="Avatar" width="100%" height="auto">
              <q-item-label caption>
                {{ post.author }} - {{ post.date }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-page>
    </q-page-container>

    <!-- Bouton pour retourner à l'accueil -->
    <div class="q-pa-md">
      <div class="q-gutter-sm">
        <q-btn push color="secondary" glossy label="Retour" @click="goToHomePage" class="q-mb-md" />
      </div>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import ProfilePage from '../pages/ProfilePage.vue';
export default defineComponent({
  name: "HomePage",
  name: "ProfilePage",

  setup() {
    const router = useRouter();

    const goToHomePage = () => {
      router.push("/");
    };
    const goToProfilePage = () => {
      router.push("/profile");
    };

    const openPost = (post) => {
      console.log('Ouvrir l\'article:', post.title);
      // Vous pouvez implémenter ici la logique pour ouvrir un article complet
    };

    const posts = [
      {
        id: 1,
        title: 'Test',
        author: 'Adef',
        authorAvatarUrl: '/image/article.jpeg',
        date: '17/02/2024',
        content: 'Aliquam lectus...'
      },
      {
        id: 2,
        title: 'Titre de l\'article 2',
        author: 'Auteur 2',
        authorAvatarUrl: '/image/logo.png',
        date: '17/02/2024',
        content: 'Contenu de l\'article 2'
      }
    ];

    return {
      goToHomePage,
      goToProfilePage,
      openPost,
      posts,
    };
  },
});
</script>
