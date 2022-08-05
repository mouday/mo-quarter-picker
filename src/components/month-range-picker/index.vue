<template>
    <el-date-picker
        class="mo-month-range-picker" 
        :value="value"
        type="monthrange"
        range-separator="至" 
        :clearable="false" 
        value-format="yyyy-MM-dd"
        start-placeholder="开始月份"
        end-placeholder="结束月份"
        @change="handleChange"
        @input="handleChange"
        >
    </el-date-picker>
</template>

<script>
// created at 2022-07-11
import moment from 'moment';


export default {
  // mo-month-range-picker
  name: 'MoMonthRangePicker',

  props: {
    value: {
        type: Array,
        default: null,
    }
  },

  components: {

  },

  data() { 
    return {

    }
  },

   computed:{

   },

  methods: {
       async getData() {
       },

       handleChange(val){
        //  console.log(val);
         let value = [moment(val[0]).startOf('month').format('YYYY-MM-DD'), moment(val[1]).endOf('month').format('YYYY-MM-DD')]
         this.$emit('update:value', value);
         this.$emit('on-change', value);
       }
  },

  created() {
    // console.log(this.value);
    //  this.getData();
  }
 }
</script>

<style lang="less">
.mo-month-range-picker{

}

.mo-month-range-picker.el-input__inner {
    width: 200px;
}

.mo-month-range-picker .el-range__close-icon {
    width: 0;
}
</style>