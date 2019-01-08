import Vue from "vue";
Vue.directive("double", {
  bind: function (el, binding) {
    el.textContent = Math.pow(binding.value, 2);
  },
  update: function (el, binding) {
    el.textContent = Math.pow(binding.value, 2);
  }
});

// 1.如上是全局注册一个指令，当然也是可以注册一个局部指令的。
// 2.钩子函数（bind/inserted/update/componentUpdated/unbind）
// 3.钩子函数参数（el/binding(name/value/oldValue/arg...)/vnode/oldVnode）
// 4.页面内注册需要放在vue实例的上面。

directives: {
  focus: {
    inserted: function (el) {
      el.focus();
    }
  }
}