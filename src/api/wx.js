import request from '@/utils/request'

// 验证消息的确来自微信服务器
export function checkSignature() {
    // console.log()
    return request.get(`/ucenter/wx/checkSignature`)
}
// /wx/createJsApiSignature
// 创建调用JsApi时所需要的签名
export function createJsApiSignature(url) {
    return request.get(`/ucenter/wx/createJsApiSignature`,{params: {url}})
}
