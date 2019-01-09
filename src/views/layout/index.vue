<template>
    <div class="app-wrapper">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'layout',
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
        position: relative;
    }

</style>
