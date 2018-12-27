import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/index'
import Login from '@/views/login/index'
import ForGet from '@/views/login/forget'
import Layout from '@/views/layout/index'
import Verification from '@/views/verification/index'
import User from '@/views/user/index'

Vue.use(Router);

export default new Router({
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
                        title: '兑换券核销'
                    }
                },
                {
                    path: '/verification',
                    name: 'Verification',
                    component: Verification,
                    meta: {
                        title: '核销记录'
                    }
                },
                {
                    path: '/user',
                    name: 'User',
                    component: User,
                    meta: {
                        title: '我的'
                    }
                },

            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/forget',
            name: 'ForGet',
            component: ForGet,
            meta: {
                title: '找回密码'
            }
        },

    ]
})
