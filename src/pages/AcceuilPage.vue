<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="justify-between">
        <q-btn flat round dense icon="menu" />
        <q-toolbar-title> MAD blog </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Contenu de la page principale -->
    <q-page-container>
      <q-page>
        <!-- Votre contenu existant ici -->

        <!-- Nouveau contenu à intégrer -->
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
              <q-item-label >
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
        <q-btn push color="secondary" glossy label="Retour" @click="goToHomePage"  class="q-mb-md" />
      </div>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const router = useRouter();

    const goToInscriptionPage = () => {
      router.push("/inscription");
    };
    const goToHomePage = () => {
      router.push("/");
    };

    const goToConnexionPage = () => {
      router.push("/connexion");
    };
    const goToAcceuilPage= () => {
      router.push("/acceuil");
    };

    return {
      goToAcceuilPage,
      goToHomePage,
      posts: [
        {
          id: 1,
          title: 'Test',
          author: 'Adef',
          authorAvatarUrl: '/image/article.jpeg',
          date: '17/02/2024',
          content: 'Aliquam lectus. Vivamus leo. Quisque ornare tellus ullamcorper nulla. Mauris porttitor pharetra tortor. Sed fringilla justo sed mauris. Mauris tellus. Sed non leo. Nullam elementum, magna in cursus sodales, augue est scelerisque sapien, venenatis congue nulla arcu et pede. Ut suscipit enim vel sapien. Donec congue. Maecenas urna mi, suscipit in, placerat ut, vestibulum ut, massa. Fusce ultrices nulla et nisl Phasellus id magna. Duis malesuada interdum arcu. Integer metus. Morbi pulvinar pellentesque mi. Suspendisse sed est eu magna molestie egestas. Quisque mi lorem, pulvinar eget, egestas quis, luctus at, ante. Proin auctor vehicula purus. Fusce ac nisl aliquam ante hendrerit pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Morbi wisi. Etiam arcu mauris, facilisis sed, eleifend non, nonummy ut, pede. Cras ut lacus tempor metus mollis placerat. Vivamus eu tortor vel metus interdum malesuada. Morbi congue congue metus. Aenean sed purus. Nam pede magna, tristique nec, porta id, sollicitudin quis, sapien. Vestibulum blandit. Suspendisse ut augue ac nibh ullamcorper posuere. Integer euismod, neque at eleifend fringilla, augue elit ornare dolor, vel tincidunt purus est id lacus. Vivamus lorem dui, commodo quis, scelerisque eu, tincidunt non, magna. Cras sodales. Quisque vestibulum pulvinar diam. Phasellus tincidunt, leo vitae tristique facilisis, ipsum wisi interdum sem, dapibus semper nulla velit vel lectus. Cras dapibus mauris et augue. Quisque cursus nulla in libero. Suspendisse et lorem sit amet mauris malesuada mollis. Nullam id justo. Maecenas venenatis. Donec lacus arcu, egestas ac, fermentum consectetuer, tempus eu, metus. Proin sodales, sem in pretium fermentum, arcu sapien commodo mauris, venenatis consequat augue urna in wisi. Quisque sapien nunc, varius eget, condimentum quis, lacinia in, est. Fusce facilisis. Praesent nec ipsum Nulla facilisi. Nunc nec elit. Integer ornare convallis tortor. Proin ac diam. In est sapien, laoreet euismod, mattis a, tincidunt at, risus. Vivamus risus. Vestibulum aliquam, urna aliquam porttitor accumsan, nulla tortor ullamcorper elit, ut consequat augue purus sit amet libero. Vivamus nisl lacus, commodo vel, dignissim ut, vestibulum id, pede. Curabitur malesuada hendrerit libero. Mauris quis dolor in tellus varius posuere. Sed vulputate elit at wisi. Fusce vitae neque. Nulla consectetuer, nunc ac eleifend laoreet, mi nulla commodo wisi, vel faucibus ligula lectus ut arcu. Vivamus hendrerit Nunc velit augue, scelerisque dignissim, lobortis et, aliquam in, risus. In eu eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Curabitur vulputate elit viverra augue. Mauris fringilla, tortor sit amet malesuada mollis, sapien mi dapibus odio, ac imperdiet ligula enim eget nisl. Quisque vitae pede a pede aliquet suscipit. Phasellus tellus pede, viverra vestibulum, gravida id, laoreet in, justo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer commodo luctus lectus. Mauris justo. Duis varius eros. Sed quam. Cras lacus eros, rutrum eget, varius quis, convallis iaculis, velit. Mauris imperdiet, metus at tristique venenatis, purus neque pellentesque mauris, a ultrices elit lacus nec tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Praesent malesuada. Nam lacus lectus, auctor sit amet, malesuada vel, elementum eget, metus. Duis neque pede, facilisis eget, egestas elementum, nonummy id, neque.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec scelerisque metus. Maecenas non mi ut metus porta hendrerit. Nunc semper. Cras quis wisi ut lorem posuere tristique. Nunc vestibulum scelerisque nulla. Suspendisse pharetra sollicitudin ante. Praesent at augue sit amet ante interdum porta. Nunc bibendum augue luctus diam. Etiam nec sem. Sed eros turpis, facilisis nec, vehicula vitae, aliquam sed, nulla. Curabitur justo leo, vestibulum eget, tristique ut, tempus at, nisl.'
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
      ],
      openPost(post) {
        // Méthode pour ouvrir un article individuel
        console.log('Ouvrir l\'article:', post.title);
        // Vous pouvez implémenter ici la logique pour ouvrir un article complet
      }
    };
  },
});
</script>
