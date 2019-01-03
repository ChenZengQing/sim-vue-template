<template>
    <div class="set-time-container">
        <div class="top-box">

        </div>
        <div class="time-box" :class="[current===1?'current':'']" @click="current=1">
            <span>从 {{startTime[0]+':'+startTime[1]}}</span>
        </div>
        <div class="time-box" :class="[current===2?'current':'']" @click="current=2">
            <span>至 {{endTime[0]+':'+endTime[1]}}</span>
        </div>

        <div class="time-picker-box">
            <mt-picker ref="timePicker" :slots="slots" @change="onValuesChange"></mt-picker>
        </div>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {garagesWorkTimePut} from '@/api/garage'

    export default {
        name: "SetTime",
        data() {
            return {
                startTime: ['00','00'],
                endTime: ['00','00'],
                lastHour: '00',
                current: 1,
                slots: [
                    {
                        flex: 1,
                        values: [],
                        className: 'slot1',
                        textAlign: 'right',
                        value: 4
                    }, {
                        divider: true,
                        content: ':',
                        className: 'slot2'
                    }, {
                        flex: 1,
                        values: [],
                        className: 'slot3',
                        textAlign: 'left'
                    }
                ]
            }
        },
        computed:{
            ...mapGetters([
                'garagesProfile',
            ])
        },
        watch: {
            current(val, oldVal) {
                if (val === 1) {
                    this.$refs.timePicker.setValues(this.startTime);
                } else {
                    this.$refs.timePicker.setValues(this.endTime);
                }
            },
        },
        created() {
            this.getHours();
            this.getMinutes();
        },
        mounted() {
            let startTime = this.garagesProfile.workStartTime.split(':');
            this.startTime = startTime;
            let endTime = this.garagesProfile.workEndTime.split(':');
            this.endTime = endTime;
            this.$refs.timePicker.setValues(startTime);
        },
        beforeDestroy() {
            console.log('beforeDestroy',this.startTime,this.endTime);
            let beginTimeStr = this.startTime[0]+':'+this.startTime[1];
            let endTimeStr = this.endTime[0]+':'+this.endTime[1];
            garagesWorkTimePut({
                beginTime: beginTimeStr,
                endTime: endTimeStr
            }).then(res=>{
                console.log(res);
                this.garagesProfile.workStartTime = beginTimeStr;
                this.garagesProfile.workEndTime = endTimeStr;
            }).catch(err=>{
                console.log(err)
            })
        },
        methods: {
            onValuesChange(picker, values) {
                console.log('onValuesChange',this.current);
                setTimeout(()=>{
                    if (this.current === 1) {
                        this.startTime = [...values];
                    } else {
                        this.endTime = [...values];
                    }
                }, 200);
                // if (values[0] !== this.lastHour) {
                //     this.lastHour = values[0];
                //     picker.setSlotValue(1, '00');
                // }
            },
            getHours() {
                for (let i = 0; i < 24; i++) {
                    let hours = i + '';
                    if (i < 10) {
                        hours = '0' + hours;
                    }
                    this.slots[0].values.push(hours)
                }
            },
            getMinutes() {
                for (let i = 0; i < 60; i++) {
                    let minute = i + '';
                    if (i < 10) {
                        minute = '0' + minute;
                    }
                    this.slots[2].values.push(minute)
                }
            }
        },
    }
</script>

<style lang="scss" scoped src="@/style/SetTime.scss">

</style>

