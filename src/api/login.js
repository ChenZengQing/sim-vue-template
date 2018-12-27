import request from '@/utils/request'

export function login(username, password) {
    // console.log()
    return request({
        url: '/ucenter/auth/login',
        method: 'post',
        data: {
            username,
            password,
            type: 0
        }
    })
}

export function logout() {
    return request.post('/ucenter/auth/logout')
}
