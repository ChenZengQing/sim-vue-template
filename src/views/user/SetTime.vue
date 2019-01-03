<template>
    <div class="set-time-container">
        <div class="top-box">

        </div>
        <div class="time-box current">
            <span>从 09:00</span>
        </div>
        <div class="time-box">
            <span>至 23:00</span>
        </div>

        <div class="time-picker-box">
            <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
        </div>

    </div>
</template>

<script>
    export default {
        name: "SetTime",
        data() {
            return {
                value: ['00','00'],
                lastHour: '00',
                slots: [
                    {
                        flex: 1,
                        values: [],
                        className: 'slot1',
                        textAlign: 'right'
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
        created() {
            this.getHours();
            this.getMinutes();
        },
        mounted() {},
        methods: {
            onValuesChange(picker, values) {
                this.value = values;
                if (values[0] !== this.lastHour) {
                    this.lastHour = values[0];
                    picker.setSlotValue(1, '00');
                }
                // if (values[0] > values[1]) {
                //     picker.setSlotValue(1, values[0]);
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

