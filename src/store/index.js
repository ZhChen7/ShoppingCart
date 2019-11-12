import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    existboo:{
      exist:false
    },
    user:{}
  },
  mutations: {
    adduser(state,user){
      state.existboo.exist=true
      state.user = user
    }
  },
  actions: {},
  modules: {}
});
