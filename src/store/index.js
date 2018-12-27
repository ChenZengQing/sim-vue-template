import Vue from 'vue'
import Vuex from 'vuex'
import tabbar from './modules/tabbar'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        tabbar,
        user,
    },
    getters
});

export default store
