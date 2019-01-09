import {login, logout} from '@/api/login'
import {getToken, setToken, removeToken} from '@/utils/auth';
import Cookies from "js-cookie";


const user = {
    state: {
        token: getToken(),
        avatar: '',
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
    },

    actions: {
        // 登录
        Login({commit}, userInfo) {
            const username = userInfo.username.trim();
            return new Promise((resolve, reject) => {
                // login(username, userInfo.password).then(response => {
                setTimeout(() => { 
                    setToken('adhfjajfd');
                    commit('SET_TOKEN', 'adhfjajfd');
                    resolve();
                }, 500);
                // }).catch(error => {
                //     reject(error);
                // })
            })
        },

        // 登出
        LogOut({commit, state}) {
            // 本地推出
            return new Promise(resolve => {
                commit('SET_TOKEN', '');
                commit('SET_ROLES', []);
                removeToken();
                Cookies.remove('CHANGE_SELECTED');
                resolve();
            })
        },

        // 前端 登出
        FedLogOut({commit}) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '');
                commit('SET_ROLES', []);
                removeToken();
                resolve();
            })
        }
    }
};

export default user
