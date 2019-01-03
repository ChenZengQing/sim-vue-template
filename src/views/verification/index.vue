<template>
    <div class="verification">
        <div class="top-box" ref="topBox">
            <span class="label">核销记录</span>
            <div class="filter-btn" :style="{color: isShow?'#FF7817':'#848484'}" @click="isShow = !isShow">
                <span>筛选</span>
                <img v-if="!isShow" src="@/assets/icon-filter.png"/>
                <img v-else src="@/assets/icon-filter-selected.png"/>
            </div>
        </div>
        <div class="list-container">
            <mt-loadmore
                :top-method="loadTop"
                :bottom-method="loadBottom"
                :bottom-all-loaded="allLoaded"
                ref="loadmore">
                <template v-if="list.length!==0">
                    <ul>
                        <li v-for="(item, index) in list" :key="index">
                            <div class="item-left">
                                <span class="code">{{item.couponCode}}</span>
                                <span class="time">核销时间：{{item.gmtCreate}}</span>
                            </div>
                            <div class="item-right">
                                <span v-if="item.couponType===1" class="type">洗车券</span>
                                <span v-if="item.couponType===2" class="type">保养券</span>
                                <span v-if="item.couponType===3" class="type">钣金喷漆券</span>
                            </div>
                        </li>
                    </ul>
                </template>
                <template v-else>
                    <div class="empty" :style="{height: (screenHeight-100) + 'px'}">
                        <span>暂无数据</span>
                    </div>
                </template>
            </mt-loadmore>

        </div>
        <transition
            @before-enter="beforeEnter"
            @enter="enterEl"
            @leave="leaveEl"
            :css="false">
            <div v-if="isShow" class="filter-box" :style="{height: screenHeight+ 'px'}">
                <div class="filter-container" v-if="isShow">
                    <div class="title-box">
                        <span class="title">服务类型</span>
                        <span class="title-tip">（可多选）</span>
                    </div>
                    <div class="type-box">
                        <span
                            class="type-item"
                            v-for="(item, index) in filterTypeOptions"
                            :class="[item.selected?'type-item-selected':'']"
                            :key="index"
                            @click="filterTypeSelected(index)">{{item.name}}</span>
                    </div>
                    <div class="title-box">
                        <span class="title">核销时间</span>
                    </div>
                    <div class="time-box">
                        <div class="begin-time" @click="openPicker(1)">{{beginTime}}</div>
                        <span>到</span>
                        <div class="end-time" @click="openPicker(2)">{{endTime}}</div>
                    </div>
                    <mt-datetime-picker
                        ref="pickerStart"
                        type="date"
                        v-model="taxDate"
                        year-format="{value} 年"
                        month-format="{value} 月"
                        date-format="{value} 日"
                        @confirm="handleDateConfirm">
                    </mt-datetime-picker>
                    <mt-datetime-picker
                        ref="pickerEnd"
                        type="date"
                        v-model="taxDate"
                        year-format="{value} 年"
                        month-format="{value} 月"
                        date-format="{value} 日"
                        @confirm="handleDateConfirm">
                    </mt-datetime-picker>
                </div>
            </div>
        </transition>

    </div>
</template>

<script>
    import '@/libs/velocity.min'
    import {coupons} from '@/api/coupons';
    import {Indicator} from 'mint-ui';

    export default {
        name: "index",
        data() {
            return {
                topStatus: '',
                allLoaded: true,
                list: [],
                screenHeight: 0,
                isShow: false,
                taxDate: new Date(),
                filterTypeOptions: [
                    {
                        value: 1,
                        name: '洗车',
                        selected: true
                    },
                    {
                        value: 2,
                        name: '保养',
                        selected: false
                    },
                    {
                        value: 3,
                        name: '钣金喷漆',
                        selected: false
                    },
                ],
                pickerTimeValue: '',
                beginTime: '',
                endTime: '',
                mode: 1,
                page: 1,
                pageSize: 10
                // ...
            };
        },
        mounted: function () {
            //原生获取屏幕高度
            this.screenHeight = document.body.clientHeight - this.$refs.topBox.offsetHeight;
        },
        created() {
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            this.getData();
        },
        watch: {
            isShow(val) {
                if (!val) {
                    this.loadTop();
                }
            }
        },
        methods: {
            beforeEnter: (el) => {
                el.style.height = 0;
            },
            enterEl(el, done) {
                Velocity(el, {height: this.screenHeight}, {duration: 300, complete: done});
            },
            leaveEl(el, done) {
                Velocity(el, {height: 0}, {duration: 300, complete: done});
            },
            filterTypeSelected(index) {
                this.filterTypeOptions.forEach((item, i) => {
                    item.selected = false;
                    if (i === index) {
                        item.selected = true;
                    }
                })
            },
            openPicker(index) {
                console.log(index, this.mode);
                this.mode = index;
                if (index === 1) {
                    this.$refs.pickerStart.open();
                } else {
                    this.$refs.pickerEnd.open();
                }

            },
            handleDateConfirm(data) {
                let year = data.getFullYear();
                let month = data.getMonth() + 1 < 10 ? '0' + (data.getMonth() + 1) : data.getMonth() + 1;
                let day = data.getDate() < 10 ? '0' + data.getDate() : data.getDate();
                console.log(year, month, day);
                let dateStr = year + '-' + month + '-' + day;
                this.mode === 1 ? this.beginTime = dateStr : this.endTime = dateStr;
            },
            loadTop() {
                // 加载更多数据
                this.page = 1;
                console.log('loadTop');
                this.getData();
            },
            loadBottom() {
                // 加载更多数据
                console.log('loadBottom');
                this.getData();

            },
            getData() {
                coupons({
                    beginTime: this.beginTime,
                    couponType: this.filterTypeOptions.filter(item => item.selected)[0].value,
                    endTime: this.endTime,
                    page: this.page,
                    pageSize: this.pageSize
                }).then(res => {
                    console.log(res);
                    if (res.currentPage >= res.totalPage) {
                        this.allLoaded = true;
                    } else {
                        this.allLoaded = false;
                    }
                    this.page++;
                    this.list = res.result;
                    this.closeLoading();
                }).catch(err => {
                    console.log(err);
                    this.closeLoading();
                });
            },
            closeLoading() {
                Indicator.close();
                this.$refs.loadmore.onTopLoaded();
                this.$refs.loadmore.onBottomLoaded();
            },
        }
    }
</script>

<style lang="scss" scoped src="@/style/Verification.scss">

</style>

