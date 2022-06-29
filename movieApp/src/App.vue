<script setup>
import HomeView from "./views/HomeView.vue";
import Navigation from "./components/Navigation.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <Navigation />
  <RouterView />
</template>

<style >
@import "@/assets/base.css";
</style>
