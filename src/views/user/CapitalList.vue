<template>
    <div class="capital-list-container">
        <div class="content">
            <mt-loadmore
                :top-method="loadTop"
                :bottom-method="loadBottom"
                :bottom-all-loaded="allLoaded"
                ref="loadmore">
                <template v-if="list.length!==0">
                    <ul>
                        <li
                            v-for="(item, index) in list"
                            @click="$router.push({name: 'CapitalDetail', query: {id: item.id}})"
                            :key="index">
                            <div class="item-left">
                                <span v-if="item.changeMethod===0" class="code">提现</span>
                                <span v-if="item.changeMethod===1" class="code">洗车</span>
                                <span v-if="item.changeMethod===2" class="code">保养</span>
                                <span v-if="item.changeMethod===3" class="code">钣金喷漆</span>
                                <span class="time">{{item.gmtCreate}}</span>
                            </div>
                            <div class="item-right">
                                <span class="type" :style="{color: item.szType===1?'#FF7817':''}">{{item.szType===1?'+':'-'}}{{item.changeAmount/100}}</span>
                            </div>
                        </li>
                    </ul>
                </template>
                <template v-else>
                    <div class="empty">
                        <span>暂无数据</span>
                    </div>
                </template>
            </mt-loadmore>
        </div>

    </div>
</template>

<script>
    import {accountsLogs} from '@/api/accounts';
    import { Indicator } from 'mint-ui';
    export default {
        name: "CapitalList",
        data() {
            return {
                topStatus: '',
                allLoaded: false,
                list: [],
                page: 1,
                pageSize: 10,
                loading: false,
            };
        },
        created() {
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            this.getData();
        },
        methods: {
            loadTop() {
                // 加载更多数据
                this.page = 1;
                this.getData();
            },
            loadBottom() {
                // 加载更多数据
                this.getData();
            },
            getData() {
                if (!this.loading) {
                    this.loading = true;
                    accountsLogs({page: this.page,pageSize: this.pageSize}).then(res=>{
                        console.log(res);
                        if (res.currentPage>=res.totalPage) {
                            this.allLoaded = true
                        }
                        this.page++;
                        this.list = res.result;
                        this.closeLoading();
                    }).catch(err=>{
                        console.log(err);
                        this.closeLoading();
                    });
                }

            },
            closeLoading() {
                this.loading = false;
                Indicator.close();
                this.$refs.loadmore.onTopLoaded();
                this.$refs.loadmore.onBottomLoaded();
            },

        }
    }
</script>

<style lang="scss" scoped src="@/style/Capital.scss">

</style>
