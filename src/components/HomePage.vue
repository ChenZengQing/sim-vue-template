<template>
    <div class="home">
        <mt-header fixed :title="selected"></mt-header>
        <!--<div class="page-container">-->
            <!--<span @click="goToDetail()">{{ msg }}</span>-->
            <!--<mt-tab-container v-model="selected">-->
                <!--<mt-tab-container-item id="外卖">-->
                    <!--<mt-cell v-for="n in 10" title="外卖 1">{{n}}</mt-cell>-->
                <!--</mt-tab-container-item>-->
                <!--<mt-tab-container-item id="订单">-->
                    <!--<mt-cell v-for="n in 5" title="订单 2"></mt-cell>-->
                <!--</mt-tab-container-item>-->
                <!--<mt-tab-container-item id="发现">-->
                    <!--<mt-cell v-for="n in 7" title="发现 3"></mt-cell>-->
                <!--</mt-tab-container-item>-->
                <!--<mt-tab-container-item id="我的">-->
                    <!--<mt-cell v-for="n in 29" title="我的 4"></mt-cell>-->
                <!--</mt-tab-container-item>-->
            <!--</mt-tab-container>-->
        <!--</div>-->
        <!--<mt-tabbar fixed v-model="selected">-->
            <!--<mt-tab-item id="外卖">-->
                <!--&lt;!&ndash;<img slot="icon" src="../assets/100x100.png">&ndash;&gt;-->
                <!--外卖-->
            <!--</mt-tab-item>-->
            <!--<mt-tab-item id="订单">-->
                <!--&lt;!&ndash;<img slot="icon" src="../assets/100x100.png">&ndash;&gt;-->
                <!--订单-->
            <!--</mt-tab-item>-->
            <!--<mt-tab-item id="发现">-->
                <!--&lt;!&ndash;<img slot="icon" src="../assets/100x100.png">&ndash;&gt;-->
                <!--发现-->
            <!--</mt-tab-item>-->
            <!--<mt-tab-item id="我的">-->
                <!--&lt;!&ndash;<img slot="icon" src="../assets/100x100.png">&ndash;&gt;-->
                <!--我的-->
            <!--</mt-tab-item>-->
        <!--</mt-tabbar>-->
    </div>
</template>

<script>
    export default {
        name: 'HomePage',
        data() {
            return {
                msg: 'this is HomePage',
                testParams: 'test params',
                selected: '外卖'
            }
        },
        methods: {
            goToDetail() {
                // this.$router.push('/detail');
                this.$router.push({
                    path: '/detail',
                    name: 'DetailPage',
                    params: {
                        name: 'name DetailPage',
                        dataObj: this.testParams
                    }
                    /*query: {
                        name: 'name',
                        dataObj: this.msg
                    }*/
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src="../style/HomePage.scss">

</style>
