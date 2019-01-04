import wx from 'weixin-js-sdk'
import {createJsApiSignature} from '../api/wx'

export default {
    scanQrCode: () => {
        console.log(location.href);
        createJsApiSignature(location.href).then(res=>{
            console.log(res);
            alert(JSON.stringify(res));
            wx.config({
                debug: false, // 开启调试模式,
                appId: res.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
                timestamp: res.timestamp, // 必填，生成签名的时间戳
                nonceStr: res.nonceStr, // 必填，生成签名的随机串
                signature: res.signature,// 必填，签名，见附录1
                jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
        }).catch(err=>{
            console.log(err)
        });
        wx.error(function (res) {
            alert("出错了：" + res.errMsg);//这个地方的好处就是wx.config配置错误，会弹出窗口哪里错误，然后根据微信文档查询即可。
        });
        wx.ready(function () {
            wx.checkJsApi({
                jsApiList: ['scanQRCode'],
                success: function (res) {
                    console.log(res);
                }
            });
            wx.scanQRCode({
                needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                scanType: ["qrCode"], // 可以指定扫二维码还是一维码，默认二者都有
                success: function (res) {
                    var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                    alert("扫描结果：" + result);
                    // window.location.href = result;//因为我这边是扫描后有个链接，然后跳转到该页面
                }
            });
        });
    }
};
