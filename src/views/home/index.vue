<template>
    <div class="home">
        <div class="top-box">
            <span class="store-name">您好，三林汽修</span>
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
    import TabBar from '../../components/TabBar';

    export default {
        name: "index",
        components: {
            TabBar,
        },
        data(){
            return {

            }
        },
        methods: {
            scanQrCode(){
                console.log(this.$wx_utils.getInstance());
                this.$wx_utils.getInstance().scanQrCode();

            },
            submit() {}
        },
    }
</script>

<style lang="scss" scoped src="@/style/Home.scss">

</style>
