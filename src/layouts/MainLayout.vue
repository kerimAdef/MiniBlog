<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="justify-between">
        <q-toolbar-title> MAD blog </q-toolbar-title>

        <!-- Bouton Inscription -->
        <q-btn
          color="secondary"
          glossy
          label="Inscription"
          class="q-mr-md"
          @click="openInscriptionModal"
        />

        <!-- Bouton Connexion -->
        <q-btn
          color="secondary"
          glossy
          label="Connexion"
          @click="openLoginModal"
        />
      </q-toolbar>
    </q-header>


    <q-page-container style="padding-bottom:0!important;">
      <q-page style="background-color:rgb(208, 208, 216);">
        <div
          class="q-pa-md"
          style="
            background-image: url('/image/imagefont.jpeg');
            background-size: cover;
          "
        >
        <!-- Home page -->
          <div
            class="text-h3 text-center q-pa-lg q-ml-xl q-mr-xl" style="color: cyan">
              MAD blog - Explorez, Découvrez, Partagez : Bienvenue dans notre
              Univers !


          </div>
          <p style="color: cyan">
            Découvrez un univers riche en contenu et en diversité sur notre blog
            ! Que vous soyez passionné de technologie, amateur de cuisine,
            adepte de voyages ou curieux de découvrir de nouvelles tendances,
            notre plateforme vous propose une multitude d'articles captivants.
            Plongez dans des sujets variés, allant de conseils pratiques à des
            réflexions profondes, et explorez les thématiques qui vous
            passionnent.</p>
        </div>

        <!-- carousel -->
        <div class="q-pb-xs">
          <q-carousel arrows animated v-model="slide" height="500px">
            <q-carousel-slide name="first" img-src="https://cdn.quasar.dev/img/mountains.jpg">
              <div class="absolute-bottom custom-caption">
                <div
                  class="absolute-bottom custom-caption"
                  style="color: cyan"
                >
                <h6>Parcourir nos articles</h6>
                  <p>Découvrez un univers riche en contenu et en diversité sur
                  notre blog ! Que vous soyez passionné de technologie, amateur
                  de cuisine, adepte de voyages ou curieux de découvrir de
                  nouvelles tendances, notre plateforme vous propose une
                  multitude d'articles captivants.</p>
                </div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="third"
              img-src="https://cdn.quasar.dev/img/parallax2.jpg"
            >
              <div class="absolute-bottom custom-caption">
                <div
                class="absolute-bottom custom-caption"
                  style="color: cyan"><h6>Famous Bridge</h6></div>
                <div class="text-subtitle1"> adepte de voyages ou curieux de découvrir de nouvelles</div>
              </div>
            </q-carousel-slide>

            <q-carousel-slide
              name="second"
              img-src="https://cdn.quasar.dev/img/parallax1.jpg"
            >
              <div class="absolute-bottom custom-caption">
                <div class="text-h2">Second stop</div>
                <div class="text-subtitle1">Famous City</div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="third"
              img-src="https://cdn.quasar.dev/img/parallax2.jpg"
            >
              <div class="absolute-bottom custom-caption">
                <div class="text-h2">Third stop</div>
                <div class="text-subtitle1">Famous Bridge</div>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
        <section class="q-pa-md">
          <div class="row q-gutter-md items-center justify-center">
            <div>
              <q-img
                class="col-8 col-md-6"
                src="image/faq.png"
                style="height: 300px; width: 300px;"
              />
            </div>
            <span class="col-8 col-md-6 row q-gutter-md items-center justify-center">
              <p class="text-h1">F.A.Q</p>
              <p>
                Sed consequat tellus et tortor. Ut tempor laoreet quam. massa, rutrum ut, egestas semper, mollis id, leo. Nulla ac massa eu risus blandit mattis. Mauris ut nunc. In hac habitasse platea dictumst. Aliquam eget tortor. Quisque dapibus pede in erat. Nunc enim. In dui nulla, commodo at, consectetuer nec, malesuada nec, elit. Aliquam ornare tellus eu urna. Sed nec metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              </p>
            </span>
          </div>
          <!-- Question 1 -->
          <q-expansion-item

            class="faq-item q-mt-md"
            expand-separator
            icon="question_mark"
            label="Pourquoi MadBlog"
          >
            <q-card>
              <q-card-section>
                MAD Blog est une plateforme qui vise à fournir un espace pour partager des connaissances, des expériences et des idées sur une variété de sujets. Que ce soit pour découvrir de nouvelles informations, apprendre des astuces pratiques ou partager vos propres créations, MAD Blog est là pour vous accompagner dans votre parcours en ligne.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <!-- Question 2 -->
          <q-expansion-item
            class="faq-item"
            expand-separator
            icon="question_mark"
            label="Comment puis-je publier un article sur MadBlog ?"
          >
            <q-card>
              <q-card-section>
                Pour publier un article sur MadBlog, vous devez d'abord créer un compte utilisateur. Une fois connecté, accédez à votre tableau de bord et cliquez sur le bouton "Nouvel Article". Remplissez les champs requis, ajoutez votre contenu et cliquez sur "Publier" pour partager votre article avec la communauté de MadBlog.
              </q-card-section>
            </q-card>
          </q-expansion-item>
         <!-- Question 3 -->
         <q-expansion-item
            class="faq-item"
            expand-separator
            icon="question_mark"
            label="Quels types d'articles puis-je trouver sur MadBlog ?"
          >
            <q-card>
              <q-card-section>
                MadBlog propose une grande variété d'articles sur différents sujets, y compris la technologie, la cuisine, les voyages, la mode, la santé, l'art, et bien plus encore. Vous trouverez des tutoriels, des critiques, des astuces, des conseils et des réflexions sur des sujets qui vous intéressent.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <!-- Question 4 -->
          <q-expansion-item
            class="faq-item"
            expand-separator
            icon="question_mark"
            label="Comment puis-je contacter l'équipe de MadBlog ?"
          >
            <q-card>
              <q-card-section>
                Si vous avez des questions, des commentaires ou des préoccupations concernant MadBlog, vous pouvez nous contacter via notre formulaire de contact disponible sur notre site web. Notre équipe se fera un plaisir de répondre à vos messages et de vous aider dans les plus brefs délais.
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </section>
        <div class="q-gutter-sm">
          <q-btn
            push
            color="secondary"
            glossy
            label="Voir articles"
            @click="goToAcceuilPage"
            class="q-mb-xl"
          />
        </div>
        <section class="q-pa-md" style="background-color: rgb(208, 208, 216);">
          <h2 class="text-h4">Contactez-nous</h2>
          <q-input filled label="Nom" />
          <q-input filled label="Email" />
          <q-input
        v-model="textareaModel"
        filled
        clearable
        type="textarea"
        color="red-12"
        label="Textarea with shadow text"
        hint="Press TAB to autocomplete suggested value or ESC to cancel suggestion"
        :shadow-text="textareaShadowText"
        @keydown="processTextareaFill"
        @focus="processTextareaFill"
      />
          <q-btn color="secondary" label="Envoyer" class="q-mb-xl" />
        </section>

      </q-page>
    </q-page-container>
    <q-footer class="absolute-bottom q-mt-xl">
      <div class="row items-center justify-center">
        <div>
          <p>© 2024 MAD Blog. Tous droits réservés.</p>
        </div>
      </div>
    </q-footer>




    <!-- Modal de connexion -->
    <q-dialog v-model="loginModalVisible">
      <!-- Contenu du modal de connexion -->
    </q-dialog>

    <!-- Modal d'inscription -->
    <q-dialog v-model="inscriptionModalVisible">
      <!-- Contenu du modal d'inscription -->
    </q-dialog>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "HomePage",

  setup() {
    const router = useRouter();
    const loginModalVisible = ref(false);
    const inscriptionModalVisible = ref(false);
    const slide = ref("first");

    const goToAcceuilPage = () => {
      router.push("/acceuil");
    };

    // Méthodes pour ouvrir/fermer les modaux de connexion et d'inscription
    const openLoginModal = () => {
      loginModalVisible.value = true;
    };

    const closeLoginModal = () => {
      loginModalVisible.value = false;
    };

    const openInscriptionModal = () => {
      inscriptionModalVisible.value = true;
    };

    const closeInscriptionModal = () => {
      inscriptionModalVisible.value = false;
    };

    return {
      goToAcceuilPage,
      openLoginModal,
      closeLoginModal,
      openInscriptionModal,
      closeInscriptionModal,
      loginModalVisible,
      inscriptionModalVisible,
      slide,
    };
  },
});
</script>

<style scoped>
.faq-item {
  background-color: rgb(118, 118, 211);
  margin-bottom: 20px; /* Ajoute de l'espace entre chaque élément */
}

.q-page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.q-page {
  flex-grow: 1;
}
</style>
