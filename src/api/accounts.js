import request from '@/utils/request'

// 查询账户信息
export function accounts() {
    return request.get('/garage/accounts')
}

// 查询资金流水
export function accountsLogs(data) {
    return request.post('/garage/accounts/logs',data)
}

// 查询资金流水详情
export function accountsLogsDetail(id) {
    return request.get(`/garage/accounts/logs/${id}`)
}

// withdraw
// 账户提现
export function accountsWithdraw(data) {
    return request.post('/garage/accounts/withdraw',data)
}

