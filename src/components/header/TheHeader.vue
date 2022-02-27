<template>
  <div class="level is-mobile mt-6 px-5 text-color">
    <the-logo></the-logo>
    <dark-mode></dark-mode>
  </div>
</template>

<script>
export default {
  components: {
    TheLogo: () => import("../logo/TheLogo.vue"),
    DarkMode: () => import("../dark-mode/DarkMode.vue"),
  },
};
</script>

<style></style>
