import wx from 'weixin-js-sdk'
import request from './request'


var WXUtils = function () {
    console.log('初始化');
    request.post(
        'http://my.service.com/index.php/opcode/6002',
        { url:location.href.split('#')[0] } //向服务端提供授权url参数，并且不需要#后面的部分
    ).then((res)=> {
        wx.config({
            debug: true, // 开启调试模式,
            appId: res.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
            timestamp: res.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.nonceStr, // 必填，生成签名的随机串
            signature: res.signature,// 必填，签名，见附录1
            jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
    });
};
WXUtils.getInstance = (function () {
    var instance = null;
    return function () {
        if (!instance) {
            instance = new WXUtils();
        }
        return instance;
    }
})();

WXUtils.prototype.getName = function () {
    console.log('haha');
};

WXUtils.prototype.scanQrCode = () => {


    console.log(window.plus)



    //这里【url参数一定是去参的本网址】
    // $.get("获取微信认证参数的地址?url=去参的本网页地址", function (data) {
    //     var jsondata = $.parseJSON(data);
    //     wx.config({
    //         // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //         debug: false,
    //         // 必填，公众号的唯一标识
    //         appId: jsondata.model.appId,
    //         // 必填，生成签名的时间戳
    //         timestamp: "" + jsondata.model.timestamp,
    //         // 必填，生成签名的随机串
    //         nonceStr: jsondata.model.nonceStr,
    //         // 必填，签名
    //         signature: jsondata.model.signature,
    //         // 必填，需要使用的JS接口列表，所有JS接口列表
    //         jsApiList: ['checkJsApi', 'scanQRCode']
    //     });
    // });
    wx.error(function (res) {
        alert("出错了：" + res.errMsg);//这个地方的好处就是wx.config配置错误，会弹出窗口哪里错误，然后根据微信文档查询即可。
    });

    wx.ready(function () {
        wx.checkJsApi({
            jsApiList: ['scanQRCode'],
            success: function (res) {

            }
        });

        wx.scanQRCode({
            needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            scanType: ["qrCode"], // 可以指定扫二维码还是一维码，默认二者都有
            success: function (res) {
                var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                alert("扫描结果：" + result);
                window.location.href = result;//因为我这边是扫描后有个链接，然后跳转到该页面
            }
        });

    });

}
;

export default {
    install(Vue) {
        Object.defineProperty(Vue.prototype, '$wx_utils', {value: WXUtils});
    }
}
