import Vue from 'vue';

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import App from './App';
import router from './router';
import Log from './utils/hqp_log';
import store from './store'

import './style/my-mint.scss';
import '@/permission' // permission control

import WXUtils from './utils/WXUtils'

Vue.use(Log);
Vue.use(MintUI);
Vue.use(WXUtils);

Vue.config.productionTip = false;

// px2rem
window.onresize = setHtmlFontSize;
function setHtmlFontSize () {
    const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
    const htmlDom = document.getElementsByTagName('html')[0]
    htmlDom.style.fontSize = htmlWidth / 10 + 'px'
}
setHtmlFontSize();

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
