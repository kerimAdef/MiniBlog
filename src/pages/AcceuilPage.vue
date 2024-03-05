<template>
  
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
            <q-item-section class="q-pa-md">
              <q-item-label class="text-h6 text-weight-bold">
                {{ post.title }}
              </q-item-label>
              <q-item-label class="text-subtitle1 text-grey-8 q-mb-md">
                <div v-html="post.content"></div>
              </q-item-label>
              <q-img
                :src="post.imageUrl"
                alt="Article"
                width="100%"
                height="fullscreen"
              />
              <q-item-label caption class="text-grey-8">
                {{ post.author }} - {{ post.date }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-page>
  
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
 
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import ProfilePage from "../pages/ProfilePage.vue";
export default defineComponent({
  // name: "HomePage",
  // name: "ProfilePage",

  setup() {
    // const router = useRouter();

    // const goToHomePage = () => {
    //   router.push("/");
    // };
    // const goToProfilePage = () => {
    //   router.push("/profile");
    // };

    const openPost = (post) => {
      console.log("Ouvrir l'article:", post.title);
      // Vous pouvez implémenter ici la logique pour ouvrir un article complet
    };

    const posts = [
      {
        id: 1,
        title: "Article 1",
        author: "Adef",
        authorAvatarUrl: "/image/article.jpeg",
        date: "17/02/2024",
        content:
          "<p>Aliquam lectus eros, convallis eget turpis sed, interdum imperdiet lacus. Pellentesque venenatis metus ac orci imperdiet, nec pellentesque velit tempus. Donec congue augue quis enim feugiat, in consequat justo eleifend. Sed aliquam, mi eget varius tempus, urna dolor feugiat quam, ut tempus massa eros et velit. Sed consequat, leo eget bibendum volutpat, tellus nisi volutpat dolor, eu volutpat dui velit eget dolor. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p><p>Curabitur vitae eros. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam in felis sit amet ligula pharetra condimentum. In rutrum accumsan ultricies. Mauris at libero.</p>",
        imageUrl: "public/image/artisan.jpg",
      },
      {
        id: 2,
        title: "Article 2",
        author: "Mouhamed",
        authorAvatarUrl: "/image/logo.png",
        date: "17/02/2024",
        content:
          "<p>Curabitur vitae eros. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam in felis sit amet ligula pharetra condimentum. In rutrum accumsan ultricies. Mauris at libero.</p><p>Curabitur vitae eros. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam in felis sit amet ligula pharetra condimentum. In rutrum accumsan ultricies. Mauris at libero.</p>",
        imageUrl: "public/image/desert.jpg",
      },
      {
        id: 3,
        title: "Article 3",
        author: "John Doe",
        authorAvatarUrl: "/image/avatar-3.jpg",
        date: "18/02/2024",
        content:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula eros, blandit nec, pharetra faucibus, egestas eget, nibh. Integer in magna. Quisque orci. Sed libero. Fusce ultrices eleifend dignissim. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Donec eget odio pellentesque diam volutpat commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p><p>Curabitur vitae eros. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam in felis sit amet ligula pharetra condimentum. In rutrum accumsan ultricies. Mauris at libero.</p>",
        imageUrl: "public/image/pexels-beyza-yalçın-20181797.jpg",
      },
      {
        id: 4,
        title: "Article 4",
        author: "Jane Doe",
        authorAvatarUrl: "/image/avatar-4.jpg",
        date: "19/02/2024",
        content:
          "<p>Curabitur vitae eros. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam in felis sit amet ligula pharetra condimentum. In rutrum accumsan ultricies. Mauris at libero.</p><p>Curabitur vitae eros. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam in felis sit amet ligula pharetra condimentum. In rutrum accumsan ultricies. Mauris at libero.</p>",
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
