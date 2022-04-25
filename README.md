# mo-quarter-picker

一个基于 Vue 和 ElementUI 的季节范围选择器

https://element.eleme.cn/#/zh-CN/component/installation

用于业务统一封装

在线demo: [https://mouday.github.io/mo-quarter-picker/test.html](https://mouday.github.io/mo-quarter-picker/test.html)

- NPM: https://www.npmjs.com/package/mo-quarter-picker
- Github: https://github.com/mouday/mo-quarter-picker

## 方式一：CDN 引入

```html
<script src="https://cdn.jsdelivr.net/npm/moment-ui@1.0.2/dist/moment-ui.js"></script>
```

Hello world

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>mo-quarter-picker</title>
    <!-- element-ui样式 -->
    <link
      href="https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.8/theme-chalk/index.min.css"
      rel="stylesheet"
    />
  </head>

  <body>
    <h1>
      季节范围选择器：mo-quarter-picker
    </h1>

    <div id="app">
      <mo-quarter-picker
        :value.sync="value"
        @on-change="handleChange"
      ></mo-quarter-picker>
    </div>

    <!-- 引入依赖 -->
    <script src="https://cdn.bootcss.com/vue/2.6.10/vue.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.8/index.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/moment.js/2.29.2/moment.min.js"></script>

    <script src="/dist/mo-quarter-picker.min.js"></script>

    <script>
      const app = new Vue({
        el: "#app",
        data() {
          return {
            value: null
          };
        },

        methods: {
          handleChange(value) {
            console.log(value);
          }
        }
      });
    </script>
  </body>
</html>
```

## 方式二：NPM

```
npm i mo-quarter-picker -S
```

main.js

```js
import Vue from "vue";
import App from "./App.vue";

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MoQuarterPicker from 'mo-quarter-picker'

Vue.use(ElementUI)
Vue.use(MoQuarterPicker)

new Vue({
  el: "#app",
  render: h => h(App)
});
```

## 参数

参数	| 说明	| 类型	| 可选值	| 默认值
value | 当前是 | Array | null，例如：['2022-09-01', '2022-06-01'] | null

## 事件

事件名称	| 说明	| 回调参数
- | - | -
on-change | 用户修改选定的值时触发 | data

on-change 回调参数 data：
```js
[
  {
    end_date: "2022-09-01"
    label: "Q3"
    quarter: 3
    start_date: "2022-07-01"
    value: "2022-3"
    year: 2022
  },
  {
    end_date: "2022-06-01"
    label: "Q2"
    quarter: 2
    start_date: "2022-04-01"
    value: "2023-2"
    year: 2023
  }
]
```
