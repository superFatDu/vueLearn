### Vuex
##### 1.使用
- 项目中已经安装vuex
```
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  default: ""
};
const actions = {
  defaultEvent(ctx, param) {
    ctx.commit("defaultEvent", param);
  }
};
const mutations = {
  defaultEvent(state, param) {
    state.default = param;
  }
}

export default new Vuex.Store({state, actions, mutations})
```