<template>
    <div class="app-wrapper">
        <router-view/>
        <tab-bar></tab-bar>
    </div>
</template>

<script>
    import TabBar from '../../components/TabBar';

    export default {
        name: 'layout',
        components: {
            TabBar,
        },
        computed: {},
        methods: {}
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .app-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
    }

</style>
