<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        mounted: function () {
            document.getElementById('app').style.height = document.documentElement.clientHeight + 'px';
        },
    }
</script>

<style lang="scss" src="@/style/App.scss">

</style>

