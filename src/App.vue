<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                tabs: [
                    {
                        id: 0,
                        name: '兑换券核销',
                        icon: require('@/assets/tabbar/unselect/5.png'),
                        selectIcon: require('@/assets/tabbar/active/5.png'),
                        pageName: 'Home',
                    },
                    {
                        id: 1,
                        name: '核销记录',
                        icon: require('@/assets/tabbar/unselect/6.png'),
                        selectIcon: require('@/assets/tabbar/active/6.png'),
                        pageName: 'Verification',
                    },
                    {
                        id: 2,
                        name: '我的',
                        icon: require('@/assets/tabbar/unselect/7.png'),
                        selectIcon: require('@/assets/tabbar/active/7.png'),
                        pageName: 'User',
                    },
                ]
            }
        },
        created() {
            this.$store.dispatch('SetTabs', this.tabs);
            // this.$store.dispatch('ChangeTab', 0);
        },
        mounted: function () {
            document.getElementById('app').style.height = document.documentElement.clientHeight + 'px';
        },
    }
</script>

<style lang="scss" src="@/style/App.scss">

</style>

