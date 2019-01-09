<template>
    <div class="login">
        <h5>登录</h5>
        <div>
            <input v-model="userName" placeholder="用户名"/>
        </div>
        <div>
            <input v-model="userPassword" placeholder="密码" type='password'/>
        </div>
        <div>
            <input @click="submitLogin" type='button' value="登录" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                userName: '123',
                userPassword: '123',
            }
        },
        methods: {
            submitLogin(){
                this.$store.dispatch('Login',{
                    username: this.userName,
                    password: this.userPassword
                }).then(res=>{
                    this.$router.push({path: '/'});
                }).catch(err=>{

                });
            }
        }
    }
</script>

<style lang="scss" scoped src="@/style/Login.scss">

</style>
