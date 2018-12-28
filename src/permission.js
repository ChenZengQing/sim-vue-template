import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import {getToken} from '@/utils/auth' // getToken from cookie
import store from './store'

NProgress.configure({showSpinner: false});// NProgress Configuration

const whiteList = ['/login', '/forget'];// no redirect whitelist

router.beforeEach((to, from, next) => {
    NProgress.start(); // start progress bar

    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    /* 路由发生变化同步底部 Tab */
    if (to.meta.tabIndex !== store.getters.selected && to.meta.tabIndex !== undefined) {
        store.dispatch('ChangeTab', to.meta.tabIndex);
    }

    if (getToken()) { // determine if there has token
        NProgress.done(); // if current page is dashboard will not trigger	afterEach hook, so manually handle it
        next();
    } else {
        /* has no token*/
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            next()
        } else {
            next('/login'); // 否则全部重定向到登录页
            NProgress.done(); // if current page is login will not trigger afterEach hook, so manually handle it
        }
    }
});

router.afterEach(() => {
    NProgress.done(); // finish progress bar
});
