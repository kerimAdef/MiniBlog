<template>
  <q-page>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card
        flat bordered
        v-for="post in posts"
        :key="post.id"
        class="my-card"
        clickable
        v-ripple
        @click="openPost(post)"
      >
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
         
            <div class="text-h5 q-mt-sm q-mb-xs">
            {{ post.title }}
          </div>

            <div class="text-caption text-grey" v-html="post.content"></div>
              <q-img
            :src="post.imageUrl"
            alt="Article"
            style="height: 200px; max-width: 100%"
          />


          <q-item-label caption class="text-grey-8">
            {{ post.author }} - {{ post.date }}
          </q-item-label>
        </q-card-section>
        </q-card-section>

      </q-card>
    </div>

    <!-- Bouton pour retourner à l'accueil -->
    <q-page-sticky position="bottom-right" class="q-mb-md q-mr-md">
      <q-btn
        push
        color="secondary"
        glossy
        label="Retour"
        :to="{ name: 'homePage' }"
      />
    </q-page-sticky>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "HomePage",

  setup() {
    const router = useRouter();

    const openPost = (post) => {
      console.log("Ouvrir l'article:", post.title);
    };

    const posts = [
      {
        id: 1,
        title: "Article 1",
        author: "Adef",
        date: "17/02/2024",
        content:
          "<p>Sed consequat tellus et tortor. Ut tempor laoreet quam. Nullam id wisi a libero tristique semper. Nullam nisl massa, rutrum ut, egestas semper, mollis id, leo. Nulla ac massa eu risus blandit mattis. Mauris ut nunc. In hac habitasse platea dictumst. Aliquam eget tortor. Quisque dapibus pede in erat. Nunc enim. In dui nulla, commodo at, consectetuer nec, malesuada nec, elit. Aliquam ornare tellus eu urna. Sed nec metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.In hac habitasse platea dictumst. Suspendisse potenti. Nulla pretium sem sit amet nisl. Nulla facilisi. Sed aliquam, turpis sed hendrerit gravida, nunc metus aliquam urna, eget pharetra nibh urna nec lectus. Duis in nisl a nisl commodo facilisis. Nunc placerat risus sed leo. Duis pellentesque porta libero. Praesent et enim. Aenean ullamcorper, ante sit amet fermentum mollis, ligula metus laoreet magna, accumsan accumsan nibh wisi at wisi. Nam tincidunt tempor neque. Maecenas dolor. Donec interdum nisl. Aliquam quam libero, interdum quis, volutpat sed, semper ut, eros. Pellentesque sodales auctor quam. Nullam suscipit massa nec elit. Nullam vulputate.</p>",
        imageUrl: "public/image/artisan.jpg",
      },
      {
        id: 2,
        title: "Article 2",
        author: "Mouhamed",
        date: "17/02/2024",
        content:
          "<p>Sed consequat tellus et tortor. Ut tempor laoreet quam. Nullam id wisi a libero tristique semper. Nullam nisl massa, rutrum ut, egestas semper, mollis id, leo. Nulla ac massa eu risus blandit mattis. Mauris ut nunc. In hac habitasse platea dictumst. Aliquam eget tortor. Quisque dapibus pede in erat. Nunc enim. In dui nulla, commodo at, consectetuer nec, malesuada nec, elit. Aliquam ornare tellus eu urna. Sed nec metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.In hac habitasse platea dictumst. Suspendisse potenti. Nulla pretium sem sit amet nisl. Nulla facilisi. Sed aliquam, turpis sed hendrerit gravida, nunc metus aliquam urna, eget pharetra nibh urna nec lectus. Duis in nisl a nisl commodo facilisis. Nunc placerat risus sed leo. Duis pellentesque porta libero. Praesent et enim. Aenean ullamcorper, ante sit amet fermentum mollis, ligula metus laoreet magna, accumsan accumsan nibh wisi at wisi. Nam tincidunt tempor neque. Maecenas dolor. Donec interdum nisl. Aliquam quam libero, interdum quis, volutpat sed, semper ut, eros. Pellentesque sodales auctor quam. Nullam suscipit massa nec elit. Nullam vulputate.</p>",
        imageUrl: "public/image/desert.jpg",
      },
      {
        id: 3,
        title: "Article 3",
        author: "John Doe",
        date: "18/02/2024",
        content:
          "<p>Sed consequat tellus et tortor. Ut tempor laoreet quam. Nullam id wisi a libero tristique semper. Nullam nisl massa, rutrum ut, egestas semper, mollis id, leo. Nulla ac massa eu risus blandit mattis. Mauris ut nunc. In hac habitasse platea dictumst. Aliquam eget tortor. Quisque dapibus pede in erat. Nunc enim. In dui nulla, commodo at, consectetuer nec, malesuada nec, elit. Aliquam ornare tellus eu urna. Sed nec metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.In hac habitasse platea dictumst. Suspendisse potenti. Nulla pretium sem sit amet nisl. Nulla facilisi. Sed aliquam, turpis sed hendrerit gravida, nunc metus aliquam urna, eget pharetra nibh urna nec lectus. Duis in nisl a nisl commodo facilisis. Nunc placerat risus sed leo. Duis pellentesque porta libero. Praesent et enim. Aenean ullamcorper, ante sit amet fermentum mollis, ligula metus laoreet magna, accumsan accumsan nibh wisi at wisi. Nam tincidunt tempor neque. Maecenas dolor. Donec interdum nisl. Aliquam quam libero, interdum quis, volutpat sed, semper ut, eros. Pellentesque sodales auctor quam. Nullam suscipit massa nec elit. Nullam vulputate.</p>",
        imageUrl: "public/image/pexels-beyza-yalçın-20181797.jpg",
      },
      {
        id: 4,
        title: "Article 4",
        author: "Jane Doe",
        date: "19/02/2024",
        content:
          "<p>Sed consequat tellus et tortor. Ut tempor laoreet quam. Nullam id wisi a libero tristique semper. Nullam nisl massa, rutrum ut, egestas semper, mollis id, leo. Nulla ac massa eu risus blandit mattis. Mauris ut nunc. In hac habitasse platea dictumst. Aliquam eget tortor. Quisque dapibus pede in erat. Nunc enim. In dui nulla, commodo at, consectetuer nec, malesuada nec, elit. Aliquam ornare tellus eu urna. Sed nec metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.In hac habitasse platea dictumst. Suspendisse potenti. Nulla pretium sem sit amet nisl. Nulla facilisi. Sed aliquam, turpis sed hendrerit gravida, nunc metus aliquam urna, eget pharetra nibh urna nec lectus. Duis in nisl a nisl commodo facilisis. Nunc placerat risus sed leo. Duis pellentesque porta libero. Praesent et enim. Aenean ullamcorper, ante sit amet fermentum mollis, ligula metus laoreet magna, accumsan accumsan nibh wisi at wisi. Nam tincidunt tempor neque. Maecenas dolor. Donec interdum nisl. Aliquam quam libero, interdum quis, volutpat sed, semper ut, eros. Pellentesque sodales auctor quam. Nullam suscipit massa nec elit. Nullam vulputate.</p>",
        imageUrl: "public/image/pexels-gabriella-ally-16176622.jpg",
      },
    ];
    return {
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

.q-card {
  transition: transform 0.3s ease-in-out;
}

.q-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

}
.my-card{
  width: 100%;
  max-width: 350px;
}
</style>
