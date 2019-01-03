<template>
    <div class="store-info">
        <div class="content-container">
            <ul>
                <li>
                    <span class="label">店铺名称</span>
                    <span class="info">{{garages.garageName}}</span>
                </li>
                <li>
                    <span class="label">负责人</span>
                    <span class="info">{{garages.contactUser}}</span>
                </li>
                <li>
                    <span class="label">联系方式</span>
                    <span class="info">{{garages.contactPhone}}</span>
                </li>
                <li>
                    <span class="label">详细地址</span>
                    <span class="info">{{garages.detailAddress}}</span>
                </li>
                <li>
                    <span class="label">规模</span>
                    <span class="info">{{garages.garageScale===1?'一类':garages.garageScale===2?'二类':'三类'}}</span>
                </li>
                <li>
                    <span class="label">营业执照号</span>
                    <span class="info">{{garages.licencePic}}</span>
                </li>
                <li>
                    <span class="label">支付宝账号</span>
                    <span class="info">{{garages.alipayAccount}}</span>
                </li>
                <li>
                    <span class="label">支付宝姓名</span>
                    <span class="info">{{garages.alipayUserName}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "forget",
        data(){
            return {
            }
        },
        computed:{
            ...mapGetters([
                'garages',
            ])
        },
        watch: {},
        created(){},
        methods: {}
    }
</script>

<style lang="scss" scoped src="@/style/StoreInfo.scss">

</style>
