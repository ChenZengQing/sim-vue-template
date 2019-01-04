import axios from 'axios';
import store from '../store';
import {getToken} from '@/utils/auth';
import md5 from '@/utils/md5.js';
import { Toast } from 'mint-ui';

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
        // console.log(arr[i] + '',obj[arr[i]], (obj[arr[i]] + '') !== '');
        if ((obj[arr[i]] + '') !== '' || typeof obj[arr[i]]==='object') {
            // console.log(arr[i] + '');
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
        'appId': 8,// APP来源[1:物流寄货端 2:物流分拣端 3:物流发货端] 7:车后商户 8:车后汽修店 9:车后车主
        'platformId': 1,// [1：H5  2：Android  3：IOS]
        'token': '',// 授权凭证
        'timestamp': Date.parse(new Date()),
        'version':'1.0.0', // 版本号
    };
    if (store.getters.token) {
        header['token'] = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }

    let signObj = {};
    Object.assign(signObj, header, config.data, config.params);
    let sign = makeSign(signObj);
    header['sign'] = sign;

    config.headers.common = header;
    // config.headers.common['userId'] = '1078487240637812737';
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

            // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
            // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
            //     MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
            //         confirmButtonText: '重新登录',
            //         cancelButtonText: '取消',
            //         type: 'warning'
            //     }).then(() => {
            //         store.dispatch('FedLogOut').then(() => {
            //             location.reload();// 为了重新实例化vue-router对象 避免bug
            //         })
            //     })
            // }
            return Promise.reject(res.msg);
        } else {
            return response.data.data;
        }
    },
    error => {

        console.log('err' + error);// for debug
        // Message({
        //     message: error.message,
        //     type: 'error',
        //     duration: 5 * 1000
        // });
        // if (error.response.status === 401) {
        //     // 401 说明 token 验证失败
        //     // 可以直接跳转到登录页面，重新登录获取 token
        //     location.href = '/login';
        // } else if (error.response.status === 500) {
        //     // 服务器错误
        //     // do something
        //     return Promise.reject(error.response.data);
        // }
        // // 返回 response 里的错误信息
        // return Promise.reject(error.response.data);

        return Promise.reject(error);
    }
);

export default service
