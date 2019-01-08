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
- 将文件import到main.js中,并引用到vue的实例中。
```
import store from "./store"

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
```
- store就成了vue的全局变量，使用如下：
```
{{ this.$store.state.default }}
```
- 过程
```
// 这是一个循环
view => actions => mutations => state =>view
  Dispatch    Commit       Mutate   Render
```
##### 2.拆分
```
1.mkdir store
2.cd store
3.touch index.js actions.js mutations.js state.js
```
- index.js
```
import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({state, actions, mutations});
```
- actions.js
```
export default {
   add({commit), param) => {
      commit("add", param);
   },
   reduce({commit}, param) => {
      commit("reduce", param);
   }
}
```
- mutations.js
```
export default {
  add(state, param) => {
    state.default += param;
    try {
       localStorage.default = state.default;
    } catch(e) {
        // TODO
    }
  },
  reduce(state, param) => {
    state.default -= param;
    try {
       localStorage.default = state.default;
    } catch(e) {
        // TODO
    }
  }
}
```
- state.js
```
let default = 1;

try {
  if(localStorage.default) {
      default = localStorage.default;
  }
} catch(e) {
  // TODO
}

export default {
  default
}
```
##### 3.调用
- 第一种情况
```
// 在template中的使用
<button type="button" @click="add">增加</button>

// 在script中的方法
export default {
  name: "vuex",
  methods: {
    add () {
      this.$store.dispatch("add", param);
    }
  }
}

```
- 第二种情况
```
// 在template中的使用
<button type="button" @click="add(param)">增加</button>

// 在script中将方法映射出来
import { mapActions } from "vuex";
export default {
  name: "vuex",
  methods: {
    ...mapActions: (["add", "reduce"])
  }
}

// mapMutations/mapGetters也可以用同样的方式映射
```