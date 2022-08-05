<template>
  <!-- 年范围选择器 -->
  <div class="mo-year-range-picker">
    <el-date-picker 
        class="mo-year-range-picker__start"
        :value="start_year" 
        type="year" 
        placeholder="开始年"
        :clearable="false" 
        value-format="yyyy-MM-dd"
        :editable="false"
        :picker-options="startYearPickerOptions"
        @change="handleStartYearChange"
        @input="handleStartYearChange"
        >
    </el-date-picker>

    <span class="mo-year-range-picker__center"> - </span>

    <el-date-picker class="mo-year-range-picker__end"
        :value="end_year"
        type="year"
        placeholder="开始年"
        :clearable="false" 
        :editable="false"
        value-format="yyyy-MM-dd"
        :picker-options="endYearPickerOptions"
        @change="handleEndYearChange"
        @input="handleEndYearChange"
        >
        </el-date-picker>
  </div>
</template>

<script>
// created at 2022-07-11
import moment from 'moment';

export default {
  // mo-year-range-picker
  name: 'MoYearRangePicker',

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
        // start_year: '',
        // end_year: '',

        startYearPickerOptions: {
                    // 周起始日 1 - 7
            // firstDayOfWeek: 1,
            // 设置禁用状态，参数为当前日期，要求返回 Boolean
            disabledDate: this.startYearDisabledDate
        },

        endYearPickerOptions: {
            // 周起始日 1 - 7
            // firstDayOfWeek: 1,
            // 设置禁用状态，参数为当前日期，要求返回 Boolean
            disabledDate: this.endYearDisabledDate
        },
    }
  },

   computed:{
    
        start_year(){
            if(this.value){
                return this.value[0]
            } else{
                return null;
            }
        },

        end_year(){
            if(this.value){
                return this.value[1]
            } else{
                return null;
            }
        }
   },

  methods: {
    async getData() {
    },
        // 设置禁用状态，参数为当前日期，要求返回 Boolean
    startYearDisabledDate(time){
        // console.log(time);
            // date.getDay();
        let currentYear = moment(time).year();

        // console.log(this.end);
        let endYear = moment().year();
        if(this.end_year){
            endYear = moment(this.end_year).year();
        }
        
        // console.log(currentYear, endYear);
        // 大于当前周的时间不允许
        return currentYear > endYear;
    },

    endYearDisabledDate(time){
        // console.log(time);
        
            // date.getDay();
        let currentYear = moment(time).year();
        
        let endYear = moment().year();
        
        let startYear = null;

        if(this.start_year){
            startYear = moment(this.start_year).year();
        }

        // console.log(startYear, currentYear, endYear);
        // 大于当前周的时间不允许
        if(startYear){
            return currentYear < startYear || currentYear > endYear;
        } else{
            return currentYear > endYear;
        }
    },

    handleStartYearChange(val){
        console.log('handleStartYearChange', val);
        // let thisWeekFirstDay = moment(val).startOf('week').add(1, 'days').format('YYYY-MM-DD');
        // console.log(thisWeekFirstDay);
        this.handleEmitChange([val, this.end_year]);
    },

    handleEndYearChange(val){
        // console.log(val);
        // let thisWeekLastDay = moment(val).endOf('week').add(1, 'days').format('YYYY-MM-DD');
        // console.log(thisWeekLastDay);
        this.handleEmitChange([this.start_year, val]);
    },

    handleEmitChange(value){
        let startDay = moment(value[0]).startOf('year').format('YYYY-MM-DD');
        let endDay = moment(value[1]).endOf('year').format('YYYY-MM-DD');
        this.$emit('update:value', [startDay, endDay])
        this.$emit('on-change', [startDay, endDay])
    },

    // handleStartYearInput(val){
    //     console.log(val);
    // }
  },

  created() {
    //  this.getData();
  }
 }
</script>

<style lang="less">
    .mo-year-range-picker{
        display: inline-block;
    }

    .mo-year-range-picker__start.el-input, 
    .mo-year-range-picker__end.el-input{
        width: 80px;
    }

    .mo-year-range-picker__start .el-input__inner,
    .mo-year-range-picker__end .el-input__inner {
        padding-right: 0;
    }

    .mo-year-range-picker__center{
        color: #666666;
        font-size: 12px;
    }
</style>

