<template>
  <q-page>
    <div>
      <q-carousel arrows animated v-model="slide" height="400px">
        <q-carousel-slide name="first" img-src="/image/imagefont.jpeg">
          <div class="absolute-bottom custom-caption">
            <div
              class="text-h3 text-center q-pa-lg q-ml-xl q-mr-xl"
              style="color: cyan"
            >
              MAD blog - Explorez, Découvrez, Partagez : Bienvenue dans notre
              Univers !
            </div>
            <div
              class="text-subtitle1 text-center q-pa-xl q-pb-xl"
              style="color: cyan"
            >
              Découvrez un univers riche en contenu et en diversité sur notre
              blog ! Que vous soyez passionné de technologie, amateur de
              cuisine, adepte de voyages ou curieux de découvrir de nouvelles
              tendances, notre plateforme vous propose une multitude d'articles
              captivants.
            </div>

            <div class="q-gutter-sm row justify-center">
              <!-- Réduisez l'espace en utilisant des classes de marge de Quasar -->
              <q-btn
                push
                color="secondary"
                glossy
                label="Voir articles"
                :to="{ name: 'Acceuil' }"
                class="q-mb-lg"
              />
            </div>
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
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      slide: "first",
    };
  },
});
</script>
