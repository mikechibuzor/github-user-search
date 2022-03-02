export default {
  state: {
    githubUser: null,
  },
  getters: {
    getGithubUser: (state) => state.githubUser,
  },
  mutations: {
    SET_GITHUB_USER(state, data) {
      state.githubUser = data;
    },
  },
};
