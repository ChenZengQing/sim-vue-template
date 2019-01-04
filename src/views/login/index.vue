<template>
    <div class="login">
        <span class="title">养车家</span>
        <span class="type">商家版</span>
        <div class="content-container">
            <div class="input-box user-name-box">
                <img src="@/assets/icon-phone.png"/>
                <div class="text-line"></div>
                <input type="text" v-model="loginForm.username" placeholder="输入手机号或用户名"/>
            </div>
            <div class="input-box user-pass-box">
                <img src="@/assets/icon-mima.png"/>
                <div class="text-line"></div>
                <input type="password" v-model="loginForm.password" placeholder="输入密码"/>
            </div>

            <mt-button type="primary" @click.native="submitLogin">登录</mt-button>
            <router-link class="forgot-pass" :to="{name:'ForGet'}">找回密码</router-link>
        </div>
        <span class="bottom-text">养车一站到家</span>
    </div>
</template>

<script>
    import { Indicator } from 'mint-ui';

    export default {
        name: "index",
        data() {
            return {
                captcha: '',
                loginForm: {
                    username: '',
                    password: ''
                },
            }
        },
        methods: {
            submitLogin() {
                Indicator.open('登录中...');
                this.$store.dispatch('Login', this.loginForm).then(() => {
                    Indicator.close();
                    this.$router.replace({path: '/'});
                }).catch(() => {
                    Indicator.close();
                })
            }
        }
    }
</script>

<style lang="scss" scoped src="@/style/Login.scss">

</style>
