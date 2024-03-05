<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-1">
    <!-- En-tête -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="justify-between">
        <q-btn flat round dense icon="menu" />
        <q-toolbar-title> MAD blog </q-toolbar-title>
        <q-btn flat round dense icon="person" @click="goToProfilePage" />
      </q-toolbar>
    </q-header>

    <!-- Contenu de la page principale -->
    <q-page-container>
      <q-page class="q-pa-md">
        <q-list bordered separator>
          <q-item
            v-for="post in posts"
            :key="post.id"
            clickable
            v-ripple
            class="q-mb-md rounded-borders"
            @click="openPost(post)"
          >
            <q-item-section>
              <div class="row">
                <!-- Contenu à gauche -->
                <div class="col-8 col-md-6">
                  <q-item-label class="text-h6 text-weight-bold">
                    {{ post.title }}
                  </q-item-label>
                  <q-item-label class="text-subtitle1 text-grey-8 q-mb-md">
                    <div v-html="post.content"></div>
                  </q-item-label>
                  <q-item-label caption class="text-grey-8">
                    {{ post.author }} - {{ post.date }}
                  </q-item-label>
                </div>
                <!-- Image à droite -->
                <div class="col-4 col-md-6">
                  <q-img
                    :src="post.imageUrl"
                    alt="Article"
                    style="height: 300px; max-width: 500px"
                  />
                </div>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-page>
    </q-page-container>

    <!-- Bouton pour retourner à l'accueil -->
    <q-page-sticky position="bottom-right" class="q-mb-md q-mr-md">
      <q-btn
        push
        color="secondary"
        glossy
        label="Retour"
        @click="goToHomePage"
      />
    </q-page-sticky>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "HomePage",

  setup() {
    const router = useRouter();

    const goToHomePage = () => {
      router.push("/");
    };

    const goToProfilePage = () => {
      router.push("/profile");
    };

    const openPost = (post) => {
      console.log("Ouvrir l'article:", post.title);
    };

    const posts = [
      {
        id: 1,
        title: "Article 1",
        author: "Adef",
        date: "17/02/2024",
        content: "<p>Sed consequat tellus et tortor. Ut tempor laoreet quam. Nullam id wisi a libero tristique semper. Nullam nisl massa, rutrum ut, egestas semper, mollis id, leo. Nulla ac massa eu risus blandit mattis. Mauris ut nunc. In hac habitasse platea dictumst. Aliquam eget tortor. Quisque dapibus pede in erat. Nunc enim. In dui nulla, commodo at, consectetuer nec, malesuada nec, elit. Aliquam ornare tellus eu urna. Sed nec metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.In hac habitasse platea dictumst. Suspendisse potenti. Nulla pretium sem sit amet nisl. Nulla facilisi. Sed aliquam, turpis sed hendrerit gravida, nunc metus aliquam urna, eget pharetra nibh urna nec lectus. Duis in nisl a nisl commodo facilisis. Nunc placerat risus sed leo. Duis pellentesque porta libero. Praesent et enim. Aenean ullamcorper, ante sit amet fermentum mollis, ligula metus laoreet magna, accumsan accumsan nibh wisi at wisi. Nam tincidunt tempor neque. Maecenas dolor. Donec interdum nisl. Aliquam quam libero, interdum quis, volutpat sed, semper ut, eros. Pellentesque sodales auctor quam. Nullam suscipit massa nec elit. Nullam vulputate.</p>",
        imageUrl: "public/image/artisan.jpg",
      },
      {
        id: 2,
        title: "Article 2",
        author: "Mouhamed",
        date: "17/02/2024",
        content: "<p>Sed consequat tellus et tortor. Ut tempor laoreet quam. Nullam id wisi a libero tristique semper. Nullam nisl massa, rutrum ut, egestas semper, mollis id, leo. Nulla ac massa eu risus blandit mattis. Mauris ut nunc. In hac habitasse platea dictumst. Aliquam eget tortor. Quisque dapibus pede in erat. Nunc enim. In dui nulla, commodo at, consectetuer nec, malesuada nec, elit. Aliquam ornare tellus eu urna. Sed nec metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.In hac habitasse platea dictumst. Suspendisse potenti. Nulla pretium sem sit amet nisl. Nulla facilisi. Sed aliquam, turpis sed hendrerit gravida, nunc metus aliquam urna, eget pharetra nibh urna nec lectus. Duis in nisl a nisl commodo facilisis. Nunc placerat risus sed leo. Duis pellentesque porta libero. Praesent et enim. Aenean ullamcorper, ante sit amet fermentum mollis, ligula metus laoreet magna, accumsan accumsan nibh wisi at wisi. Nam tincidunt tempor neque. Maecenas dolor. Donec interdum nisl. Aliquam quam libero, interdum quis, volutpat sed, semper ut, eros. Pellentesque sodales auctor quam. Nullam suscipit massa nec elit. Nullam vulputate.</p>",
        imageUrl: "public/image/desert.jpg",
      },
      {
        id: 3,
        title: "Article 3",
        author: "John Doe",
        date: "18/02/2024",
        content: "<p>Sed consequat tellus et tortor. Ut tempor laoreet quam. Nullam id wisi a libero tristique semper. Nullam nisl massa, rutrum ut, egestas semper, mollis id, leo. Nulla ac massa eu risus blandit mattis. Mauris ut nunc. In hac habitasse platea dictumst. Aliquam eget tortor. Quisque dapibus pede in erat. Nunc enim. In dui nulla, commodo at, consectetuer nec, malesuada nec, elit. Aliquam ornare tellus eu urna. Sed nec metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.In hac habitasse platea dictumst. Suspendisse potenti. Nulla pretium sem sit amet nisl. Nulla facilisi. Sed aliquam, turpis sed hendrerit gravida, nunc metus aliquam urna, eget pharetra nibh urna nec lectus. Duis in nisl a nisl commodo facilisis. Nunc placerat risus sed leo. Duis pellentesque porta libero. Praesent et enim. Aenean ullamcorper, ante sit amet fermentum mollis, ligula metus laoreet magna, accumsan accumsan nibh wisi at wisi. Nam tincidunt tempor neque. Maecenas dolor. Donec interdum nisl. Aliquam quam libero, interdum quis, volutpat sed, semper ut, eros. Pellentesque sodales auctor quam. Nullam suscipit massa nec elit. Nullam vulputate.</p>",
        imageUrl: "public/image/pexels-beyza-yalçın-20181797.jpg",
      },
      {
        id: 4,
        title: "Article 4",
        author: "Jane Doe",
        date: "19/02/2024",
        content: "<p>Sed consequat tellus et tortor. Ut tempor laoreet quam. Nullam id wisi a libero tristique semper. Nullam nisl massa, rutrum ut, egestas semper, mollis id, leo. Nulla ac massa eu risus blandit mattis. Mauris ut nunc. In hac habitasse platea dictumst. Aliquam eget tortor. Quisque dapibus pede in erat. Nunc enim. In dui nulla, commodo at, consectetuer nec, malesuada nec, elit. Aliquam ornare tellus eu urna. Sed nec metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.In hac habitasse platea dictumst. Suspendisse potenti. Nulla pretium sem sit amet nisl. Nulla facilisi. Sed aliquam, turpis sed hendrerit gravida, nunc metus aliquam urna, eget pharetra nibh urna nec lectus. Duis in nisl a nisl commodo facilisis. Nunc placerat risus sed leo. Duis pellentesque porta libero. Praesent et enim. Aenean ullamcorper, ante sit amet fermentum mollis, ligula metus laoreet magna, accumsan accumsan nibh wisi at wisi. Nam tincidunt tempor neque. Maecenas dolor. Donec interdum nisl. Aliquam quam libero, interdum quis, volutpat sed, semper ut, eros. Pellentesque sodales auctor quam. Nullam suscipit massa nec elit. Nullam vulputate.</p>",
        imageUrl: "public/image/pexels-gabriella-ally-16176622.jpg",
      },
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

<style>
.q-item {
  transition: transform 0.3s ease-in-out;
}

.q-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
</style>
