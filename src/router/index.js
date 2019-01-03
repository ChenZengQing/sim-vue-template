import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/index'
import Login from '@/views/login/index'
import ForGet from '@/views/login/forget'
import Layout from '@/views/layout/index'
import Verification from '@/views/verification/index'
import User from '@/views/user/index'
import StoreInfo from '@/views/user/StoreInfo'
import CapitalList from '@/views/user/CapitalList'
import CapitalDetail from '@/views/user/CapitalDetail'

Vue.use(Router);

export default new Router({
    mode: 'history',
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
                        title: '兑换券核销',
                        tabIndex: 0,
                    }
                },
                {
                    path: '/verification',
                    name: 'Verification',
                    component: Verification,
                    meta: {
                        title: '核销记录',
                        tabIndex: 1,
                    }
                },
                {
                    path: '/user',
                    name: 'User',
                    component: User,
                    meta: {
                        title: '我的',
                        tabIndex: 2,
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
        {
            path: '/storeInfo',
            name: 'StoreInfo',
            component: StoreInfo,
            meta: {
                title: '店铺资料'
            }
        },
        {
            path: '/capitalList',
            name: 'CapitalList',
            component: CapitalList,
            meta: {
                title: '资金流水'
            }
        },
        {
            path: '/capitalDetail',
            name: 'CapitalDetail',
            component: CapitalDetail,
            meta: {
                title: '流水详情'
            }
        },

    ]
})
