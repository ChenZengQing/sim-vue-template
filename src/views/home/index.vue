<template>
    <div class="home">
        <h5>首页</h5>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex';

    export default {
        name: "index",
        data(){
            return {}
        },
        computed:{
            ...mapGetters([
                'garages'
            ])
        },
        methods: {
        },
    }
</script>

<style lang="scss" scoped src="@/style/Home.scss">

</style>
