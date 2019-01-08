export default {
  add(state, param) {
    state.defaultData += param;
    try {
      localStorage.defaultData = state.defaultData;
    } catch (e) {
      console.log(e);
    }
  },
  reduce(state, param) {
    state.defaultData -= param;
    try {
      localStorage.defaultData = state.defaultData;
    } catch (e) {
      console.log(e);
    }
  }
}