<template>
  <form @submit.prevent="searchUserHandler" class="form px-4 mt-6">
    <div class="field panel is-relative">
      <div class="control has-icons-left has-icons-right">
        <input
          type="text"
          class="input is-large pr-4"
          v-model.trim="search"
          placeholder="Search GitHub username..."
        />
        <span class="icon is-small is-left">
          <i class="fa fa-search" aria-hidden="true"></i>
        </span>
        <p v-if="isInputError" class="has-text-danger">
          Please input field cannot be empty
        </p>
      </div>
    </div>
    <button ref="button" type="submit" class="is-info button is-absolute">
      Search
    </button>
  </form>
</template>

<script>
import { searchUser } from "../../services/search";

export default {
  data() {
    return {
      search: null,
      isInputError: false,
    };
  },
  methods: {
    validateSearchInput() {
      if (!this.search) {
        this.isInputError = true;
        return false;
      }
      this.isInputError = false;
      return true;
    },
    async searchUserHandler() {
      try {
        if (!this.validateSearchInput()) {
          return false;
        }
        this.$refs.button.classList.add("is-loading");
        const response = await searchUser(this.search);
        const { data, status } = response;
        if (data && status === 200) {
          this.$refs.button.classList.remove("is-loading");
          // ()=> proceeds to save in store
          this.$store.commit("SET_GITHUB_USER", data);
          console.log(this.$store.state.githubUser);
        }
      } catch (err) {
        this.$refs.button.classList.remove("is-loading");
        console.log(err);
      }
    },
  },
};
</script>

<style scoped></style>
