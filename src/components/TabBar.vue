<template>
    <mt-tabbar v-model="selected">
        <mt-tab-item v-for="(tab, index) in tabs" :key="index" :id="tab.id">
            <img slot="icon" :src="tab.id===selected?tab.selectIcon:tab.icon">
            {{tab.name}}
        </mt-tab-item>
    </mt-tabbar>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "TabBar",
        data() {
            return {}
        },
        computed: {
            selected: {
                get() {
                    return this.$store.getters.selected;
                },
                set(val) {
                    this.$store.dispatch('ChangeTab', val);
                    this.$router.push({name: this.tabs[val].pageName});
                }
            },
            ...mapGetters([
                'tabs'
            ])
        },
    }
</script>

<style scoped>

</style>
