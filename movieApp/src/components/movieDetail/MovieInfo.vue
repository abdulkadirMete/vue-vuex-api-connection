<template>
  <!-- left -->
  <div :class="$style.container">
    <div :class="$style.left">
      <img :src="movie.img" alt="" :class="$style.movieImg" />
      <div :class="$style.btnGroup">
        <button :class="['btn', $style.share]">Facebookta Paylaş</button>
        <button :class="['btn', $style.shareTwitter]">Twittirda paylaş</button>
      </div>
    </div>

    <!-- right    -->
    <div :class="$style.right">
      <div :class="$style.rightHeader">
        <div :class="$style.imdbBox">
          <span :class="$style.imdbRate">{{ movie.imdb }}</span>
        </div>
        <span :class="$style.movieName">{{ movie.name }}</span>
      </div>
      <ul :class="$style.movieInfo">
        <li :class="$style.infoItem">
          <span :class="$style.infoHeading">Kategori:</span>
          <span :class="$style.infoValue">{{
            movie.categorys[0] || "Bilinmiyor"
          }}</span>
        </li>

        <li :class="$style.infoItem">
          <span :class="$style.infoHeading">Cast:</span>
          <span :class="$style.infoValue">{{
            movie.cast[0] || "Bilinmiyor"
          }}</span>
        </li>

        <li :class="$style.infoItem">
          <span :class="$style.infoHeading">Director:</span>
          <span :class="$style.infoValue">{{
            movie.director || "Bilinmiyor"
          }}</span>
        </li>

        <li :class="$style.infoItem">
          <span :class="$style.infoHeading">Diller:</span>
          <span :class="$style.infoValue">{{
            movie.langs[0] || "Bilinmiyor"
          }}</span>
        </li>

        <li :class="$style.infoItem">
          <span :class="$style.infoValue">{{
            movie.desc.desc[0] || "Bilinmiyor"
          }}</span>
        </li>

        <button @click="watchMovie" :class="$style.watchButton">İzle</button>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    movie: Object,
  },
  methods: {
    watchMovie() {
      console.log("click");
      window.location.href = this.movie.video;
    },
  },
};
</script>
<style module>
.container {
  width: 100%;
  overflow-x: hidden;
  display: flex;
  padding: 40px 70px;
  column-gap: 3rem;
}

/* left */
.left {
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  align-items: center;
}

.movieImg {
  width: 250px;
  object-fit: cover;
}

.btnGroup {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.add {
  background-color: #63707d !important;
  color: white;
  font-weight: 600;
  border-radius: 4px;
  padding: 0.5rem 1rem;
}

.shareTwitter {
  background-color: #1d9bf0 !important ;
  color: white;
  font-weight: 600;
  border-radius: 4px;
  padding: 0.5rem 1rem;
}

.share {
  padding: 0.5rem 1rem;
  background-color: #4867aa !important ;
  color: white;
  font-weight: 600;
  border-radius: 4px;
}

/* right */
.right {
  flex: 2;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}

/* rightHeader */
.rightHeader {
  display: flex;
  column-gap: 2rem;
}

.imdbBox {
  padding: 1rem;
  border: 2px solid #f6c833;
  color: white;
}

.imdbRate {
  color: white;
  font-size: 2rem;
}
.movieName {
  color: white;
  font-size: 2rem;
}

.movieInfo {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}

.infoItem {
  display: flex;
  column-gap: 0.5rem;
  align-items: center;
}

.infoHeading {
  color: darkgray;
  font-size: 18px;
  padding: 0.5rem;
  border-radius: 4px;
}

.infoValue {
  font-size: 15px;
  color: #f1f1f1;
  font-size: 18px;
}

.watchButton {
  color: white;
  padding: 1rem 0;
  background-color: #3e3e3e !important;
  font-size: 18px;
  font-weight: 700;
  border: none;
  letter-spacing: 2px;
  border-radius: 8px;
  transition: 0.3s all ease-in-out;
}

.watchButton:hover {
  cursor: pointer;
  transform: scale(1.05);
}
</style>
