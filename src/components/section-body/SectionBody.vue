<template>
  <div class="div px-4">
    <div id="main-body" class="box mt-6">
      <div class="columns is-mobile">
        <div class="column">
          <!-- user-photo -->
          <user-photo></user-photo>
        </div>
        <div class="column is-two-thirds is-three-quarters-mobile">
          <div class="level">
            <div
              class="level-left is-flex is-flex-wrap-wrap is-flex-direction-column"
            >
              <h1
                class="level-item is-size-5-mobile is-size-3 has-text-weight-medium"
              >
                {{ loginName }}
              </h1>
              <p class="level-item is-size-6-mobile has-text-left">
                @{{ username }}
              </p>
            </div>
            <div class="level-right">
              <h4 class="level-item is-size-6 has-text-weight-medium">
                Joined {{ createdAt }}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="columns" id="bio" style="margin-top: -4rem">
        <div class="column is-one-third"></div>
        <div class="column">
          <h2 class="has-text-left">{{ bio }}</h2>
          <div id="bio-inner" class="box mt-4">
            <div class="columns is-mobile">
              <div class="column">
                <p>Repos</p>
                <h3 class="is-size-3 mt-1-mobile">{{ repos }}</h3>
              </div>
              <div class="column">
                <p>Followers</p>
                <h3 class="is-size-3 mt-1-mobile">{{ followers }}</h3>
              </div>
              <div class="column">
                <p>Following</p>
                <h3 class="is-size-3 mt-1-mobile">{{ following }}</h3>
              </div>
            </div>
          </div>
          <div class="columns mt-4">
            <div class="column is-half is-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style="height: 1.3rem; width: 1.3rem; margin-right: 0.5rem"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>{{ location }}</p>
            </div>
            <div class="column is-half is-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style="height: 1.3rem; width: 1.3rem; margin-right: 0.5rem"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>{{ link }}</p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-half is-flex">
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                style="height: 1.3rem; width: 1.3rem; margin-right: 0.5rem"
              >
                <path
                  d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"
                />
              </svg>
              <p>{{ twitter }}</p>
            </div>
            <div class="column is-half is-flex">
              <span class="icon mr-1">
                <i class="fas fa-home"></i>
              </span>
              <p>San Francisco</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    UserPhoto: () => import("../user-photo/UserPhoto.vue"),
  },
  computed: {
    loginName() {
      return this.$store.getters.getGithubUser
        ? this.$store.getters.getGithubUser.login
        : "The Octocat";
    },
    username() {
      return this.$store.getters.getGithubUser
        ? this.$store.getters.getGithubUser.name
        : "@octocat";
    },
    bio() {
      return this.$store.getters.getGithubUser
        ? this.$store.getters.getGithubUser.bio
        : "This profile has no bio";
    },
    createdAt() {
      return this.$store.getters.getGithubUser
        ? new Date(Date.parse(this.$store.getters.getGithubUser.created_at))
            .toString()
            .substring(0, 11)
        : "25 Jan 2011";
    },
    repos() {
      return this.$store.getters.getGithubUser
        ? this.$store.getters.getGithubUser.public_repos
        : "8";
    },
    followers() {
      return this.$store.getters.getGithubUser
        ? this.$store.getters.getGithubUser.followers
        : "3938";
    },
    following() {
      return this.$store.getters.getGithubUser
        ? this.$store.getters.getGithubUser.following
        : "9";
    },
    location() {
      return this.$store.getters.getGithubUser
        ? this.$store.getters.getGithubUser.location
        : "San Francisco";
    },
    link() {
      return this.$store.getters.getGithubUser
        ? this.$store.getters.getGithubUser.location
        : "https://github.bloq";
    },
    twitter() {
      return this.$store.getters.getGithubUser
        ? this.$store.getters.getGithubUser.twitter_username
        : "https://github.bloq";
    },
  },
};
</script>

<style></style>
