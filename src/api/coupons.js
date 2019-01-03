import request from '@/utils/request'

// 查询核销记录
export function coupons(data) {
    return request.post('/garage/coupons',data)
}

// 核销兑换码
export function couponsLogs(coupon_code) {
    return request.put(`/garage/coupons/${coupon_code}`)
}

