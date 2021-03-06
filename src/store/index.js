import Vue from "vue";
import Vuex from "vuex";
import theme from "./modules/theme.js";
import githubUser from "./modules/githubUser.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { theme, githubUser },
});
