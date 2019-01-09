import request from '@/utils/request'

export function login(username, password) {
    return request({
        url: '/ucenter/auth/login',
        method: 'post',
        data: {
            username,
            password,
            type: 1
        }
    })
}

export function logout() {
    return request.post('/ucenter/auth/logout')
}
