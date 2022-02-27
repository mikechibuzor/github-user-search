<template>
  <div class="container">
    <!-- section header-->
    <the-header></the-header>
    <!-- section search bar -->
    <!-- section body -->
  </div>
</template>

<script>
export default {
  components: {
    TheHeader: () => import("./components/header/TheHeader.vue"),
  },
  computed: {
    theme() {
      return this.$store.getters.getTheme;
    },
  },
  watch: {
    theme(newTheme) {
      return newTheme === "light"
        ? document.querySelector("html").classList.remove("dark")
        : document.querySelector("html").classList.add("dark");
    },
  },
  beforeMount() {
    this.$store.dispatch("initTheme");
  },
};
</script>

<style>
body {
  font-family: "Fredoka", sans-serif;
}
</style>
