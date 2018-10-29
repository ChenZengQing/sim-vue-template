<template>
    <span @click="goBack()">{{ msg }}</span>
</template>

<script>
    export default {
        name: "DetailPage",
        data() {
            return {
                msg: 'this is DetailPage'
            }
        },
        created: function () {
            this.getParams();
        },
        methods: {
            goBack() {
                this.$router.back();
            },
            getParams() {
                this.Log.log(this.$route.params);
                // 取到路由带过来的参数
                let routerParams = this.$route.params.dataObj;
                // 将数据放在当前组件的数据内
                this.msg = routerParams?routerParams:this.msg;
            }
        },
    }
</script>

<style scoped>

</style>
