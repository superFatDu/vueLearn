export default {
  defaultTest(state, idx) {
    state.defaultData = idx;
    try {
      localStorage.defaultData = idx;
    } catch (e) {
      console.log(e);
    }
  }
}