<template>
    <div class="capital-detail-container">
        <div class="top-box">
            <span class="label">变动金额（元）</span>
            <span class="money">{{logDetail.szType===1?'+':'-'}}{{logDetail.changeAmount/100}}</span>
        </div>
        <ul>
            <li>
                <span class="label">类型</span>
                <span class="info">{{logDetail.szType===1?'收入':'支出'}}</span>
            </li>
            <li>
                <span class="label">交易订单号</span>
                <span class="info">{{logDetail.tradeNo}}</span>
            </li>
            <li>
                <span class="label">备注</span>
                <span v-if="logDetail.changeMethod===0" class="info">提现</span>
                <span v-if="logDetail.changeMethod===1" class="info">洗车</span>
                <span v-if="logDetail.changeMethod===2" class="info">保养</span>
                <span v-if="logDetail.changeMethod===3" class="info">钣金喷漆</span>
            </li>
            <li>
                <span class="label">时间</span>
                <span class="info">{{logDetail.gmtCreate}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import {accountsLogsDetail} from '@/api/accounts';
    import { Indicator } from 'mint-ui';

    export default {
        name: "CapitalDetail",
        data() {
            return {
                logDetail: '',
            };
        },
        created(){
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            accountsLogsDetail(this.$route.query.id).then(res=>{
                console.log(res);
                this.logDetail = res;
                Indicator.close();
            }).catch(err=>{
                console.log(err);
                Indicator.close();
            })
        },
        methods: {}
    }
</script>

<style lang="scss" scoped src="@/style/Capital.scss">

</style>
