<template>
  <div class="level-right is-clickable" @click="darkModeToggler">
    <div class="level-item">
      <p class="is-flex is-align-items-center is-justify-content-center">
        <span class="mr-4">LIGHT</span>
        <span class="is-small"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style="height: 1.75em; width: 1.75rem"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            /></svg
        ></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isDarkMode() {
      return this.$store.getters.getTheme;
    },
  },
  methods: {
    darkModeToggler() {
      this.$store.dispatch("toggleTheme");
    },
  },
};
</script>

<style></style>
