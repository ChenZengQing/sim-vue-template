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
    import wx from 'weixin-js-sdk'

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
                console.log(1,wx);
                wx.scanQRCode({
                    needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                    scanType: ["qrCode"], // 可以指定扫二维码还是一维码，默认二者都有
                    success: function (res) {
                        var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                        alert("扫描结果："+result);
                        window.location.href = result;//因为我这边是扫描后有个链接，然后跳转到该页面
                    }
                })
            },
            submit() {}
        },
    }
</script>

<style lang="scss" scoped src="@/style/Home.scss">

</style>
