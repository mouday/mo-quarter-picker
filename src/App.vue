<template>
  <div id="app" class="mo-container">
    <!-- 使用选择器 -->
    <div class="mo-row">
        <span>星期范围选择器</span>
        <mo-week-range-picker
              :value.sync="week_value"
              @on-change="handleChange">
        </mo-week-range-picker>
    </div>

    <div class="mo-row">
        <span>月份范围选择器</span>
        <mo-month-range-picker
          :value.sync="month_value"
          @on-change="handleChange"
        ></mo-month-range-picker>
    </div>

    <div class="mo-row">
          <span>季度范围选择器</span>
        <mo-quarter-range-picker
          :value.sync="quarter_value"
          @on-change="handleChange"
        ></mo-quarter-range-picker>
      </div>

    <div class="mo-row">
      <span>年度范围选择器</span>
      <mo-year-range-picker 
        :value.sync="year_value"
            @on-change="handleChange">
      </mo-year-range-picker>
    </div>


    <div  class="mo-row" >
        <span>日期范围选择器</span>

        <mo-date-range-picker 
          :type.sync="type"
          :week-value.sync="week_value"
          :month-value.sync="month_value"
          :quarter-value.sync="quarter_value"
          :year-value.sync="year_value"
          @on-value-change="handleValueChange"
          @on-type-change="handleTypeChange"
        ></mo-date-range-picker>
      </div>
  </div>


</template>

<script>
import moment from 'moment';

export default {
  name: "app",
  data() {
    let now = moment().format('YYYY-MM-DD')

    return {
      value: null,

      msg: "Welcome to Your Vue.js App",

      // switchValue: 0,
      // switchValue: '0',
      switchValue: true,
      
      type: 'week',
      week_value: [moment(now).startOf("week").subtract(7, 'weeks').format('YYYY-MM-DD'), moment(now).endOf("week").format('YYYY-MM-DD')],
      month_value: [moment(now).subtract(7, 'months').startOf("month").format('YYYY-MM-DD'), moment(now).endOf("month").format('YYYY-MM-DD')],
      quarter_value: [moment(now).subtract(7, 'quarters').startOf("quarter").format('YYYY-MM-DD'), moment(now).endOf("quarter").format('YYYY-MM-DD')],
      year_value: [moment(now).subtract(7, 'years').startOf("year").format('YYYY-MM-DD'), moment(now).endOf("year").format('YYYY-MM-DD')],

    };
  },
  methods: {
    handleChange(value) {
      console.log(this.value);
      console.log(value);
    },

    handleValueChange(){
        console.log('handleValueChange');
    },

    handleTypeChange(){
        console.log('handleTypeChange', this.type);
        // this.resetData();
    },

    handleWeekRangeChange(){

    }
  }
};
</script>

<style lang="less">
  .mo-container{
    padding-top: 40px;
    padding-left: 100px;
  }

  .mo-row{
    margin-bottom: 20px;
  }
</style>
