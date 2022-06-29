<template>
<router-link :to="`/movie/${movie._id}`">
  <div :class="$style.container">
    <img :src="movie.img" alt="movie" :class="$style.movieImg" />
  </div></router-link>
</template>

<script>
import { defineProps, onMounted } from "vue";

export default {
  props: {
    movie: Object,
  },
  setup(props) {
  },
};
</script>

<style module>
.container {
  width: 250px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
}
.movieImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
