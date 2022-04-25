import QuarterPicker from "./quarter-picker/index.vue";

const components = [QuarterPicker];

// 注册组件
const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* 支持使用标签的方式引入 Vue是全局变量时，自动install */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components
};
