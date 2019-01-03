<template>
    <div class="user">
        <div class="top-box">
            <div class="top-box-top">
                <span class="user-store-name">{{garages.garageName}}</span>
                <span class="withdraw-btn">提现</span>
            </div>
            <div class="top-box-bottom">
                <div class="user-money-item">
                    <span class="user-money-label">账户余额(元)</span>
                    <span class="user-money">{{garagesProfile.balanceAmount/100}}</span>
                </div>
                <div class="user-money-item">
                    <span class="user-money-label">冻结金额(元)</span>
                    <span class="user-money">{{garagesProfile.frozenAmount/100}}</span>
                </div>
            </div>
        </div>
        <div class="user-store-info">
            <ul>
                <li @click="$router.push({name: 'StoreInfo'})">
                    <span class="label">店铺资料</span>
                    <span class="info">{{garages.garageName}}</span>
                    <img src="@/assets/icon-backarrow.png"/>
                </li>
                <li @click="$router.push({name: 'CapitalList'})">
                    <span class="label">资金流水</span>
                    <span class="info"></span>
                    <img src="@/assets/icon-backarrow.png"/>
                </li>
                <li @click="$router.push({name: 'ServeTime'})">
                    <span class="label">服务时间</span>
                    <span class="info">{{garagesProfile.workStartTime}}-{{garagesProfile.workEndTime}}</span>
                    <img src="@/assets/icon-backarrow.png"/>
                </li>
            </ul>
            <div class="line"></div>
        </div>
        <div class="user-store-sever">
            <div class="title">服务项目</div>
            <ul>
                <li v-for="(item, index) in garagesProfile.business" :key="index">
                    <span class="sever-item-title">{{item.serviceType===1?'洗车':item.serviceType===2?'洗车':'钣金喷漆'}}</span>
                    <span class="sever-item-info">{{item.serviceAbstract}}</span>
                </li>
            </ul>
            <div class="line"></div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "index",
        computed:{
            ...mapGetters([
                'garages',
                'garagesProfile',
            ])
        },

    }
</script>

<style lang="scss" scoped src="@/style/user.scss">

</style>

