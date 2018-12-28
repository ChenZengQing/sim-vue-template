import {login, logout} from '@/api/login'
import {getName, setName, getToken, setToken, removeToken} from '@/utils/auth';
import Cookies from "js-cookie";


const user = {
    state: {
        token: getToken(),
        name: getName(),
        avatar: '',
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_NAME: (state, name) => {
            state.name = name
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
                login(username, userInfo.password).then(response => {
                    setToken(response.result);
                    setName(response.username);
                    commit('SET_TOKEN', response.result);
                    commit('SET_NAME', response.username);
                    resolve();
                }).catch(error => {
                    reject(error);
                })
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
            // return new Promise((resolve, reject) => {
            //     logout().then(() => {
            //         commit('SET_TOKEN', '');
            //         commit('SET_ROLES', []);
            //         removeToken();
            //         resolve();
            //     }).catch(error => {
            //         reject(error);
            //     })
            // })
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
