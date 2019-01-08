export default {
  add({commit}, param) {
    commit("add", param);
  },
  reduce({commit}, param) {
    commit("reduce", param);
  }
}