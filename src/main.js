// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import App from './App';
import router from './router';
import Log from './utils/hqp_log';
import axios from './utils/axios';
// import BaiduMap from 'vue-baidu-map';

// Vue.use(BaiduMap, {
//     // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
//     ak: 'PT32evRApfFu2VvstTpAccPivarvmwwY'
// });

Vue.use(Log);
Vue.use(axios);
Vue.use(MintUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
