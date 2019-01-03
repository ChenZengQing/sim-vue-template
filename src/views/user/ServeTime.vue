<template>
    <div class="serve-time-container">
        <div class="top-box" @click="$router.push({name: 'SetTime'})">
            <div class="top-left">
                <span>开始服务</span>
                <span>结束服务</span>
            </div>
            <div class="top-center">
                <span>{{garagesProfile.workStartTime}}</span>
                <span>{{garagesProfile.workEndTime}}</span>
            </div>
            <div class="top-right">
                <img src="@/assets/icon-backarrow.png"/>
            </div>
        </div>
        <div class="check-serve-time-box">
            <span>根据服务时间切换服务、休息状态</span>
            <mt-switch v-model="switchStatus" @change="garagesWorkSwitchPut"></mt-switch>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {garagesWorkStatus, garagesWorkSwitchPut} from '@/api/garage'
    export default {
        name: "ServeTime",
        data() {
            return {
                switchStatus: false
            }
        },
        computed:{
            ...mapGetters([
                'garagesProfile',
            ])
        },
        created() {
            garagesWorkStatus().then(res=>{
                console.log(res);
                this.switchStatus = res.switchStatus;
            }).catch(err=>{
                console.log(err);
            })
        },
        methods: {
            garagesWorkSwitchPut() {
                garagesWorkSwitchPut(this.switchStatus).then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log(err)
                })
            }
        }
    }
</script>

<style lang="scss" scoped src="@/style/ServeTime.scss">

</style>

