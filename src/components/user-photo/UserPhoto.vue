<template>
  <div
    class="user-photo is-flex is-justify-content-center is-align-items-center"
  >
    <figure class="image is-128x128 is-128x128-mobile">
      <img class="is-rounded" :src="avatarUrl" />
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      default: "",
    },
  },
  computed: {
    avatarUrl() {
      return this.$store.getters.getGithubUser
        ? this.$store.getters.getGithubUser.avatar_url
        : "https://bulma.io/images/placeholders/128x128.png";
    },
  },
};
</script>

<style></style>
