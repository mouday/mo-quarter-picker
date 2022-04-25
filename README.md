# mo-quarter-picker

一个基于 Vue 和 ElementUI 的扩展 UI 组件库

https://element.eleme.cn/#/zh-CN/component/installation

用于业务统一封装

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
npm i moment-ui -S
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
