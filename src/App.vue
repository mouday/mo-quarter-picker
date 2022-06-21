<template>
  <div id="app">
    <!-- 使用选择器 -->
    <mo-quarter-picker
      :value.sync="value"
      @on-change="handleChange"
    ></mo-quarter-picker>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      value: null,

      msg: "Welcome to Your Vue.js App",

      // switchValue: 0,
      // switchValue: '0',
      switchValue: true
    };
  },
  methods: {
    handleChange(value) {
      console.log(this.value);
      console.log(value);
    }
  }
};
</script>

<style lang="less"></style>
