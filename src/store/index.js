import Vue from 'vue'
import Vuex from 'vuex'
import tabbar from './modules/tabbar'
import user from './modules/user'
import garage from './modules/garage'
import getters from './getters'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        tabbar,
        user,
        garage,
    },
    getters
});

export default store
