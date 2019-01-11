import axios from 'axios';
import store from '../store';
import {getToken} from '@/utils/auth';
import md5 from '@/utils/md5.js';
import { Toast } from 'mint-ui';
import router from '../router';

const APP_SECRET = 'secretKey-h5';

function makeSign(obj) {
    if (!obj) {
        console.log('需要加密的数组对象为空')
    }
    let str = '';
    let secret = APP_SECRET;
    if (!secret) {
        console.log('密钥未获取');
    }
    //生成key升序数组
    let arr = Object.keys(obj);
    arr.sort();
    for (let i in arr) {
        if ((obj[arr[i]] + '') !== '' || typeof obj[arr[i]]==='object') {
            if (typeof obj[arr[i]]==='object') {
                str += arr[i] + '=' + JSON.stringify(obj[arr[i]]) + '&';
            } else {
                str += arr[i] + '=' + obj[arr[i]] + '&';
            }
        }
    }
    if(str.lastIndexOf('&')===str.length-1) {
        str = str.substr(0, str.length - 1)
    }
    // console.log('加密前 ==== ', str + '&key=' + secret);
    let encrypted = md5(str+'&key=' + secret);
    encrypted = encrypted.toUpperCase();
    return encrypted;
}

// 创建axios实例
const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 10000,// 请求超时时间
    responseType: "json",
    withCredentials: true, // 是否允许带cookie这些
});

service.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';
// request拦截器
service.interceptors.request.use(config => {
    let header = {
        // 自定义 headers
        'token': '',// 授权凭证
        'timestamp': Date.parse(new Date()),
        'version':'1.0.0', // 版本号
    };
    if (store.getters.token) {
        header['token'] = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }

    // 加密
    let signObj = {};
    Object.assign(signObj, header, config.data, config.params);
    let sign = makeSign(signObj);
    header['sign'] = sign;

    config.headers.common = header;
    return config;
}, error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(
    response => {
        /**
         * code为非20000是抛错 可结合自己业务进行修改
         */
        const res = response.data;
        if (res.code !== 0) {
            Toast({
                message: res.msg,
                position: 'bottom',
                duration: 1500
            });
            return Promise.reject(res.msg);
        } else {
            return response.data.data;
        }
    },
    error => {
        console.log('err' , error);// for debug
        if (error.response.status === 401) {
            // 401 说明 token 验证失败
            // 可以直接跳转到登录页面，重新登录获取 token
            router.push({name: 'Login'});
            // location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default service
