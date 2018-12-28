<template>
    <div class="user">
        <div class="top-box">
            <div class="top-box-top">
                <span class="user-store-name">三林汽修</span>
                <span class="withdraw-btn">提现</span>
            </div>
            <div class="top-box-bottom">
                <div class="user-money-item">
                    <span class="user-money-label">账户余额(元)</span>
                    <span class="user-money">20.00</span>
                </div>
                <div class="user-money-item">
                    <span class="user-money-label">冻结金额(元)</span>
                    <span class="user-money">20.00</span>
                </div>
            </div>
        </div>
        <div class="user-store-info">
            <ul>
                <li @click="$router.push({name: 'StoreInfo'})">
                    <span class="label">店铺资料</span>
                    <span class="info">三林汽修</span>
                    <img src="@/assets/icon-backarrow.png"/>
                </li>
                <li @click="$router.push({name: 'CapitalList'})">
                    <span class="label">资金流水</span>
                    <span class="info"></span>
                    <img src="@/assets/icon-backarrow.png"/>
                </li>
                <li>
                    <span class="label">服务时间</span>
                    <span class="info">09:00-22:00</span>
                    <img src="@/assets/icon-backarrow.png"/>
                </li>
            </ul>
            <div class="line"></div>
        </div>
        <div class="user-store-sever">
            <div class="title">服务项目</div>
            <ul>
                <li>
                    <span class="sever-item-title">洗车</span>
                    <span class="sever-item-info">洗车现金洗车工具，洗干净。洗干净。</span>
                </li>
                <li>
                    <span class="sever-item-title">洗车</span>
                    <span class="sever-item-info">洗车现金洗车工具，洗干净。洗干净。</span>
                </li>
                <li>
                    <span class="sever-item-title">洗车</span>
                    <span class="sever-item-info">洗车现金洗车工具，洗干净。洗干净。</span>
                </li>
                <li>
                    <span class="sever-item-title">洗车</span>
                    <span class="sever-item-info">洗车现金洗车工具，洗干净。洗干净。</span>
                </li>
            </ul>
            <div class="line"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped src="@/style/user.scss">

</style>

