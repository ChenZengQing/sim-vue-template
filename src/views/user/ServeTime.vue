<template>
    <div class="serve-time-container">
        <div class="top-box" @click="$router.push({name: 'SetTime'})">
            <div class="top-left">
                <span>开始服务</span>
                <span>结束服务</span>
            </div>
            <div class="top-center">
                <span>09:00</span>
                <span>23:00</span>
            </div>
            <div class="top-right">
                <img src="@/assets/icon-backarrow.png"/>
            </div>
        </div>
        <div class="check-serve-time-box">
            <span>根据服务时间切换服务、休息状态</span>
            <mt-switch v-model="value"></mt-switch>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ServeTime",
        data() {
            return {
                value: true
            }
        }
    }
</script>

<style lang="scss" scoped src="@/style/ServeTime.scss">

</style>

