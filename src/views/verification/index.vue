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
                <ul>
                    <li v-for="item in list">
                        <div class="item-left">
                            <span class="code">0528-25AW-W7Q2</span>
                            <span class="time">核销时间：2018-02-03 21:59:23</span>
                        </div>
                        <div class="item-right">
                            <span class="type">保养券</span>
                        </div>
                    </li>
                </ul>
            </mt-loadmore>

        </div>
        <transition
            @before-enter="beforeEnter"
            @enter="enterEl"
            @leave="leaveEl"
            :css="false">
            <div v-if="isShow" class="filter-box" :style="{height: screenHeight+ 'px'}">
                <div class="filter-container">
                    <div class="title-box">
                        <span class="title">服务类型</span>
                        <span class="title-tip">（可多选）</span>
                    </div>
                    <div class="type-box">
                        <span
                            class="type-item"
                            v-for="(item, index) in filterTypeOptions"
                            :class="[item.selected?'type-item-selected':'']"
                            @click="filterTypeSelected(index)">{{item.name}}</span>
                    </div>
                    <div class="title-box">
                        <span class="title">核销时间</span>
                    </div>
                    <mt-datetime-picker
                        v-model="pickerVisible"
                        ref="picker"
                        type="date"
                        year-format="{value} 年"
                        month-format="{value} 月"
                        date-format="{value} 日">
                    </mt-datetime-picker>
                </div>
            </div>
        </transition>

    </div>
</template>

<script>
    import '@/libs/velocity.min'

    export default {
        name: "index",
        data() {
            return {
                topStatus: '',
                allLoaded: false,
                list: [0,1,2,3,4,5,6,7,8,9,10],
                screenHeight: 0,
                isShow: true,
                filterTypeOptions: [
                    {
                        name: '洗车',
                        selected: true
                    },
                    {
                        name: '保养',
                        selected: false
                    },
                    {
                        name: '钣金喷漆',
                        selected: false
                    },
                ],
                pickerVisible: ''
                // ...
            };
        },
        mounted: function () {
            //原生获取屏幕高度
            // console.log(this.$refs.topBox.offsetHeight,document.body.clientHeight);
            this.screenHeight = document.body.clientHeight-this.$refs.topBox.offsetHeight;
            this.$refs.picker.open();

        },
        methods: {
            beforeEnter: (el)=> {
                el.style.height = 0;
            },
            enterEl(el, done) {
                Velocity(el, {height: this.screenHeight}, { complete: done });
            },
            leaveEl(el, done) {
                Velocity(el, {height: 0}, { complete: done });
            },
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
            },
            filterTypeSelected(index) {
                this.filterTypeOptions.forEach((item, i)=>{
                    item.selected = false;
                    if (i === index) {
                        item.selected = true;
                    }
                })
            },
        }
    }
</script>

<style lang="scss" scoped src="@/style/Verification.scss">

</style>

