<template>
  <q-layout>
    <q-page>
      <q-list bordered separator>
        <q-item
          v-for="post in posts"
          :key="post.id"
          clickable
          @click="openPost(post)"
        >
          <q-item-section avatar>
            <q-avatar>
              <img :src="post.authorAvatarUrl" alt="Avatar">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>
              {{ post.title }}
            </q-item-label>
            <q-item-label caption>
              {{ post.author }} - {{ post.date }}
            </q-item-label>
            <q-item-label lines="2">
              {{ post.content }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-page>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Titre de l\'article 1',
          author: 'Auteur 1',
          authorAvatarUrl: '/image/logo.png',
          date: '17/02/2024',
          content: 'Contenu de l\'article 1'
        },
        {
          id: 2,
          title: 'Titre de l\'article 2',
          author: 'Auteur 2',
          authorAvatarUrl: '/image/logo.png',
          date: '17/02/2024',
          content: 'Contenu de l\'article 2'
        },
        // Ajoutez d'autres articles ici...
      ]
    }
  },
  methods: {
    openPost(post) {
      // Méthode pour ouvrir un article individuel
      console.log('Ouvrir l\'article:', post.title);
      // Vous pouvez implémenter ici la logique pour ouvrir un article complet
    }
  }
}
</script>
