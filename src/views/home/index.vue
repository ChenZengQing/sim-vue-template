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
                <input type="text"/>
                <div class="line"></div>
                <input type="text"/>
                <div class="line"></div>
                <input type="text"/>
            </div>
            <mt-button type="primary" @click.native="submit">确认核销</mt-button>
            <img class="scan-btn" @click="scanQrCode" src="@/assets/icon-scan.png"/>
        </div>
    </div>
</template>

<script>

    import WXUtils from '@/utils/WXUtils';
    import {mapGetters} from 'vuex';

    export default {
        name: "index",
        components: {},
        data(){
            return {}
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
            submit() {}
        },
    }
</script>

<style lang="scss" scoped src="@/style/Home.scss">

</style>
