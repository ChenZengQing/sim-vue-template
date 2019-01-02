<template>
    <div class="forget">
        <div class="content-container">
            <span class="title">{{title}}</span>
            <template v-if="type === 'forget'">
                <div class="input-box user-name-box">
                    <img src="@/assets/icon-phone.png"/>
                    <div class="text-line"></div>
                    <input type="text" placeholder="输入手机号或用户名"/>
                </div>
                <div class="input-box yzm-box">
                    <img src="@/assets/icon-yzm.png"/>
                    <div class="text-line"></div>
                    <input type="text" placeholder="输入验证码"/>
                    <span class="yzm-btn">获取验证码</span>
                </div>

            </template>
            <template v-else>
                <div class="input-box user-pass-box">
                    <img src="@/assets/icon-mima.png"/>
                    <div class="text-line"></div>
                    <input type="password" placeholder="输入密码"/>
                </div>
                <div class="input-box user-pass-box">
                    <img src="@/assets/icon-mima.png"/>
                    <div class="text-line"></div>
                    <input type="password" placeholder="再次输入密码"/>
                </div>
            </template>

            <mt-button v-if="type==='forget'" type="primary" @click.native="next">下一步</mt-button>
            <mt-button v-else type="primary" @click.native="submit">重设密码</mt-button>

            <router-link class="back-login" :to="{name:'Login'}" replace>返回登录</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "forget",
        data(){
            return {
                type: 'forget',
                title: '用手机号找回密码'
            }
        },
        watch: {
            type(val){
                if (val === 'reset') {
                    document.title = '重设密码';
                    this.title = '请重设您的密码';
                } else {
                    document.title = '忘记密码';
                    this.title = '用手机号找回密码';
                }
            }
        },
        created(){},
        methods: {
            next() {
                this.type = 'reset';
            },
            submit() {}
        }
    }
</script>

<style lang="scss" scoped src="@/style/Login.scss">

</style>
