<template>
  <Loading v-if="store.state.singleMovieLoading" />
  <MovieInfo v-else :movie="store.state.singleMovie" />
</template>
<script setup>
import { useRoute } from "vue-router";
import store from "../store";
import MovieInfo from "../components/movieDetail/MovieInfo.vue";
import Loading from "../components/Loading.vue";
// init route
const route = useRoute();
const id = route.params.id;

store.dispatch("fetchSingleMovie", id);
</script>
<style lang=""></style>
