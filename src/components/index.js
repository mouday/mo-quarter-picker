import QuarterRangePicker from "./quarter-range-picker/index.vue";
import YearRangePicker from "./year-range-picker/index.vue";
import MonthRangePicker from "./month-range-picker/index.vue";
import WeekRangePicker from "./week-range-picker/index.vue";
import DateRangePicker from "./date-range-picker/index.vue";

const components = [
  QuarterRangePicker,
  YearRangePicker,
  MonthRangePicker,
  WeekRangePicker,
  DateRangePicker
];

// 注册组件
const install = function(Vue) {
  // console.log('install');
  components.forEach(component => {
    // console.log(component.name);
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
