<template>
  <div class="container" style="max-width: 770px; margin-bottom: 5rem">
    <!-- section header-->
    <the-header></the-header>
    <!-- section search bar -->
    <search-bar></search-bar>
    <!-- section body -->
    <section-body></section-body>
  </div>
</template>

<script>
export default {
  components: {
    TheHeader: () => import("./components/header/TheHeader.vue"),
    SearchBar: () => import("./components/search-bar/SearchBar.vue"),
    SectionBody: () => import("./components/section-body/SectionBody.vue"),
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

<style></style>
