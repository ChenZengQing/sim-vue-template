<template>
    <div class="home">
        <div class="top-box">
            <span class="store-name">您好，{{garages.garageName}}</span>
            <!--<div class="store-state-box">-->
                <!--<span>服务中</span>-->
            <!--</div>-->
        </div>
        <div class="content">
            <span class="title">请输入兑换码</span>
            <div class="code-box">
                <!--<input type="text"/>-->
                <!--<div class="line"></div>-->
                <!--<input type="text"/>-->
                <!--<div class="line"></div>-->
                <!--<input type="text"/>-->
                <input type="text" v-model="couponCode" style="flex: 1;"/>
            </div>
            <mt-button type="primary" @click.native="submit">确认核销</mt-button>
            <img class="scan-btn" @click="scanQrCode" src="@/assets/icon-scan.png"/>
        </div>
    </div>
</template>

<script>

    import WXUtils from '@/utils/WXUtils';
    import {mapGetters} from 'vuex';
    import {couponsCode} from '@/api/coupons'
    import {Toast} from "mint-ui";

    export default {
        name: "index",
        components: {},
        data(){
            return {
                couponCode: ''
            }
        },
        computed:{
            ...mapGetters([
                'garages'
            ])
        },
        methods: {
            scanQrCode(){
                WXUtils.scanQrCode();

            },
            submit() {
                if (this.couponCode) {
                    couponsCode(this.couponCode).then(res=>{
                        console.log(res);
                        if (res) {
                            Toast({
                                message: '核销成功',
                                position: 'bottom',
                                duration: 1500
                            });
                            this.couponCode = '';
                        }
                    }).catch(err=>{
                        console.log(err);
                    });
                } else {
                    Toast({
                        message: '兑换码为空',
                        position: 'bottom',
                        duration: 1500
                    });
                }
            }
        },
    }
</script>

<style lang="scss" scoped src="@/style/Home.scss">

</style>
