import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import DetailPage from '@/components/DetailPage'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/detail',
            name: 'DetailPage',
            component: DetailPage
        }
    ]
})
