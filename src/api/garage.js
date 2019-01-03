import request from '@/utils/request'

// 获取汽修店资料
export function garages() {
    return request.get('/garage/garages')
}

// 我的资料
export function garagesProfile() {
    return request.get('/garage/garages/profile')
}

// 获取工作状态
export function garagesWorkStatus() {
    return request.get('/garage/garages/work/status')
}

// 设置工作状态
export function garagesWorkStatusPut(status) {
    return request.put('/garage/garages/work/status',{status})
}

// 开关自动切换工作状态
export function garagesWorkSwitchPut(status) {
    return request.put(`/garage/garages/work/switch?status=${status}`)
}

// 设置服务时间
export function garagesWorkTimePut(workTimeReq) {
    return request.put('/garage/garages/work/time',workTimeReq)
}
