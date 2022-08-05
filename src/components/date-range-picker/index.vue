<template>
    <div class="mo-date-range-picker">
        <!-- 周 月 季 年 -->
        <el-select class="mo-date-range-picker__select" 
            :value="type" 
            placeholder="请选择"
            @change="handleTypeChange"
            >
            <el-option v-for="item in pickerTypeOptions" 
                :key="item.value" 
                :label="item.label" 
                :value="item.value">
            </el-option>
        </el-select>

        <!-- 周范围选择器 -->
        <WeekRangePicker v-show="type == pickerTypeEnum.WEEK"
            :value="weekValue"
            @on-change="handleWeekRangeChange">
        </WeekRangePicker>

        <!-- 月份范围选择器 -->
        <MonthRangePicker v-show="type == pickerTypeEnum.MONTH" 
            :value="monthValue"
            @on-change="handleMonthRangeChange"
        ></MonthRangePicker>

        <!-- 季度范围选择器 -->
        <QuarterRangePicker v-show="type == pickerTypeEnum.QUARTER"  
                class="mo-date-range-picker__quarter" 
                :value="quarterValue"
                @on-change="handleQuarterRangeChange"></QuarterRangePicker>
        
        <!-- 年范围选择器 -->
        <YearRangePicker v-show="type == pickerTypeEnum.YEAR"  
            :value="yearValue"
            @on-change="handleYearRangeChange">
        </YearRangePicker>

    </div>
</template>

<script>
    // created at 2022-07-07
    import moment from 'moment';
    import { pickerTypeOptions, pickerTypeEnum } from './config.js';
    import WeekRangePicker from '../week-range-picker/index.vue';
    import YearRangePicker from '../year-range-picker/index.vue';
    import MonthRangePicker from '../month-range-picker/index.vue';
    import QuarterRangePicker from '../quarter-range-picker/index.vue';
    
    export default {
        // mo-date-range-picker
        name: 'MoDateRangePicker',

        props: {
            type:{
                type: String,
                default: pickerTypeEnum.WEEK
            },
            weekValue:{
                type: Array,
                default: null,
            },
            monthValue:{
                type: Array,
                default: null,
            },
            quarterValue:{
                type: Array,
                default: null,
            },
            yearValue:{
                type: Array,
                default: null,
            },

        },

        components: {
            WeekRangePicker,
            YearRangePicker,
            MonthRangePicker,
            QuarterRangePicker
            // [QuarterPicker.name]: QuarterPicker,
            // MoQuarterPicker
            // DatePicker
        },

        data() {
            let now = moment();
            return {
                
                value: [],
                pickerTypeEnum,
                pickerTypeOptions,

                // week_start: now.
                // week_end: now.format('YYYY-MM-DD')
            }
        },

        computed: {

        },

        methods: {
            async getData() {
            },

            handleChange() {

            },

            handleWeekRangeChange(val){
                // console.log('handleWeekRangeChange', val);
                this.$emit('update:weekValue', val)
                this.$emit('on-value-change', {
                    type: pickerTypeEnum.WEEK,
                    value: val
                })
            },

            handleMonthRangeChange(val){
                this.$emit('update:monthValue', val)
                this.$emit('on-value-change', {
                    type: pickerTypeEnum.MONTH,
                    value: val
                })
            },

            handleQuarterRangeChange(val){
                this.$emit('update:quarterValue', [val[0].start_date, val[1].end_date])
                this.$emit('on-value-change',  {
                    type: pickerTypeEnum.QUARTER,
                    value: val
                })
            },

            handleYearRangeChange(val){
                // console.log('handleYearRangeChange', val);
                this.$emit('update:yearValue', val)
                this.$emit('on-value-change',  {
                    type: pickerTypeEnum.YEAR,
                    value: val
                })
            },

            handleTypeChange(val){
                this.$emit('update:type', val);
                this.$emit('on-type-change', val);
            }
        },

        created() {
            this.getData();
        }
    }
</script>

<style lang="less">
.mo-date-range-picker{
    display: inline-block;
}

.mo-date-range-picker__select{
    width: 60px;
    margin-right: 10px;
}

.mo-date-range-picker__quarter 
.el-date-editor--monthrange.el-input__inner{
    width: 220px;
}
</style>
