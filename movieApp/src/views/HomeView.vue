<script>
import { computed } from "vue";
import "vue3-carousel/dist/carousel.css";
import "../assets/override-buttons.css";
import store from "../store/index";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import MovieItem from "../components/MovieItem.vue";
import Loading from "../components/Loading.vue";

export default {
  setup() {
    store.dispatch("fetchSliderMovies");

    return {
      fetchedSliderItems: computed(() => store.state.getSliderMovies),
      store,
    };
  },
  mounted() {},
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    MovieItem,
    Loading,
  },
  data() {
    return {
      settings: {
        itemsToShow: 5,
        autoplay: 1200,
        wrapAround: true,
      },
    };
  },
};
</script>

<template>
  <loading v-if="store.state.isSliderLoading" />
  <div v-else class="slide-container">
    <carousel :settings="settings">
      <slide v-for="movie in store.state.sliderMovies" :key="movie._id">
        <MovieItem :movie="movie" />
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
  <!-- <div v-else v-for="movie in store.state.sliderMovies" :key="movie._id">
    <h1>dfjaldfja</h1>
  </div> -->
</template>

<style scoped>
.slide-container {
  width: 100%;
  padding: 3rem;
}

.carousel__prev,
.carousel__next {
  background-color: yellow !important;
}
</style>
