<template>
  <div class="level is-mobile mt-6 px-5">
    <div class="level-left">
      <h1 class="level-item is-size-3 has-text-weight-medium">devfinder</h1>
    </div>
    <dark-mode></dark-mode>
  </div>
</template>

<script>
export default {
  components: {
    DarkMode: () => import("../dark-mode/DarkMode.vue"),
  },
};
</script>

<style></style>
