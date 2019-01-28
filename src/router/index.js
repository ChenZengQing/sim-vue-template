import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/index'
import Home from '@/views/home/index'
import Login from '@/views/login/index'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            name: 'Layout',
            redirect: '/home',
            component: Layout,
            children: [
                {
                    path: '/home',
                    name: 'Home',
                    component: Home,
                    meta: {
                        title: '首页',
                    }
                },
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {
                title: '登录',
            }
        }
    ]
})
