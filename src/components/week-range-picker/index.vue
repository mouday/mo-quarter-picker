<template>
    <div class="mo-week-range-picker">
        <!-- 周范围选择器 -->
        <el-date-picker class="mo-week-range-picker__start" 
            :value="start" 
            type="week" 
            format="yyyy 第 WW 周" 
            placeholder="开始周" 
            :clearable="false" 
            value-format="yyyy-MM-dd"
            :picker-options="startPickerOptions"
            @change="handleStartChange"
            @input="handleStartChange"
            >
        </el-date-picker>
        <span class="mo-week-range-picker__center"> - </span>
        <el-date-picker class="mo-week-range-picker__end" 
            :value="end" 
            type="week" 
            placeholder="结束周"
            format="yyyy 第 WW 周" 
            :clearable="false" 
            value-format="yyyy-MM-dd"
            :picker-options="endPickerOptions"
            @change="handleEndChange"
            @input="handleEndChange"
            >
        </el-date-picker>
    </div>
</template>

<script>
    // created at 2022-07-11
    import moment from 'moment';

    export default {
        // mo-week-range-picker
        name: 'MoWeekRangePicker',

        props: {
            value: {
                type: Array,
                default: null
            }
        },

        components: {

        },

        data() {
            return {
                // start: '',
                // end: '',

                startPickerOptions: {
                    // 周起始日 1 - 7
                    firstDayOfWeek: 1,
                    // 设置禁用状态，参数为当前日期，要求返回 Boolean
                    disabledDate: this.startDisabledDate
                },

                endPickerOptions: {
                    // 周起始日 1 - 7
                    firstDayOfWeek: 1,
                    // 设置禁用状态，参数为当前日期，要求返回 Boolean
                    disabledDate: this.endDisabledDate
                },
            }
        },

        computed: {
            start(){
                if(this.value){
                    return this.value[0]
                } else{
                    return null;
                }
            },

            end(){
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
            startDisabledDate(time){
                // console.log(time);

                    // date.getDay();
                let weekLastDay = moment().endOf('week').format('YYYY-MM-DD');
                let currentDate = moment(time).format('YYYY-MM-DD');
                
                // console.log(this.end);

                if(this.end){
                    weekLastDay = moment(this.end).endOf('week').format('YYYY-MM-DD');
                }
                
                // console.log(currentDate, weekLastDay);
                // 大于当前周的时间不允许
                return currentDate > weekLastDay;
            },

            endDisabledDate(time){
                // console.log(time);
               
                    // date.getDay();
                let thisWeekLastDay = moment().endOf('week').format('YYYY-MM-DD');
                let currentDate = moment(time).format('YYYY-MM-DD');
                
                let startWeekLastDay = null;

                if(this.start){
                    startWeekLastDay = moment(this.start).startOf('week').format('YYYY-MM-DD');
                }

                // console.log(startWeekLastDay, currentDate, thisWeekLastDay);
                // 大于当前周的时间不允许
                if(startWeekLastDay){
                    return currentDate < startWeekLastDay || currentDate > thisWeekLastDay;
                } else{
                    return currentDate > thisWeekLastDay;
                } 
            },

            handleStartChange(val){
                // console.log('handleStartChange', val);
                // let thisWeekFirstDay = moment(val).startOf('week').add(1, 'days').format('YYYY-MM-DD');
                // console.log(thisWeekFirstDay);
                this.handleEmitChange([val, this.end]);
            },

            handleEndChange(val){
                // console.log('handleEndChange', val);
                // let thisWeekLastDay = moment(val).endOf('week').add(1, 'days').format('YYYY-MM-DD');
                // console.log(thisWeekLastDay);
                this.handleEmitChange([this.start, val]);
            },

            handleEmitChange(value){
                let thisWeekFirstDay = moment(value[0]).startOf('week').format('YYYY-MM-DD');
                let thisWeekLastDay = moment(value[1]).endOf('week').format('YYYY-MM-DD');
                this.$emit('update:value', [thisWeekFirstDay, thisWeekLastDay])
                this.$emit('on-change', [thisWeekFirstDay, thisWeekLastDay])
            }
        },


        created() {
            // this.getData();
        }
    }
</script>

<style lang="less">
    .mo-week-range-picker {
        display: inline-block;
    }

    .mo-week-range-picker__start.el-input,
    .mo-week-range-picker__end.el-input {
        width: 120px;
    }

    .mo-week-range-picker__start .el-input__inner,
    .mo-week-range-picker__end .el-input__inner {
        padding-right: 0;
    }

    .mo-week-range-picker__end{
        /* margin-left: 10px; */
    }
    .mo-week-range-picker__center{
        color: #666666;
        font-size: 12px;
    }
</style>
