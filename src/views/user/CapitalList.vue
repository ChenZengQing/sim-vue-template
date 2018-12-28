<template>
    <div class="capital-list-container">
        <div class="content">
            <mt-loadmore
                :top-method="loadTop"
                :bottom-method="loadBottom"
                :bottom-all-loaded="allLoaded"
                ref="loadmore">
                <ul>
                    <li v-for="item in list" @click="$router.push({name: 'CapitalDetail', query: {}})">
                        <div class="item-left">
                            <span class="code">提现</span>
                            <span class="time">2018-02-26 21:32:32</span>
                        </div>
                        <div class="item-right">
                            <span class="type">-40.32</span>
                        </div>
                    </li>
                </ul>
            </mt-loadmore>
        </div>

    </div>
</template>

<script>
    export default {
        name: "CapitalList",
        data() {
            return {
                topStatus: '',
                allLoaded: false,
                list: [0,1,2,3,4,5,6,7,8,9,10,11]
                // ...
            };
        },
        methods: {
            loadTop() {
                // 加载更多数据
                setTimeout(()=>{
                    this.$refs.loadmore.onTopLoaded();
                },1000);

            },
            loadBottom() {
                // 加载更多数据
                setTimeout(()=>{
                    this.allLoaded = false;// 若数据已全部获取完毕
                    // this.allLoaded = true;// 若数据已全部获取完毕
                    this.$refs.loadmore.onBottomLoaded();
                },1000);

            }
        }
    }
</script>

<style lang="scss" scoped src="@/style/Capital.scss">

</style>
