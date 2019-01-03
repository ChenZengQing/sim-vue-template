import {
    garages,
    garagesProfile,
    garagesWorkStatus,
    garagesWorkStatusPut,
    garagesWorkSwitchPut,
    garagesWorkTimePut
} from '@/api/garage'

const garage = {
    state: {
        garages: {}, // 店铺资料
        garagesRequested: false, // 是否已请求店铺资料
        garagesProfile: {}, // 我的资料
        garagesProfileRequested: false, // 是否已请求我的资料
    },
    mutations: {
        SET_GARAGES: (state, garages) => {
            state.garages = garages
        },
        SET_GARAGES_REQUESTED: (state, garagesRequested) => {
            state.garagesRequested = garagesRequested
        },
        SET_GARAGES_PROFILE: (state, garagesProfile) => {
            state.garagesProfile = garagesProfile
        },
        SET_GARAGES_PROFILE_REQUESTED: (state, garagesProfileRequested) => {
            state.garagesProfileRequested = garagesProfileRequested
        },
    },
    actions: {
        // 登录
        Garages({commit}) {
            return new Promise((resolve, reject) => {
                garages().then(response => {
                    console.log('garages ', response);
                    commit('SET_GARAGES', response);
                    commit('SET_GARAGES_REQUESTED', true);
                    resolve();
                }).catch(error => {
                    reject(error);
                })
            })
        },
        GaragesProfile({commit}) {
            return new Promise((resolve, reject) => {
                garagesProfile().then(response => {
                    console.log('garagesProfile ', response);
                    commit('SET_GARAGES_PROFILE', response);
                    commit('SET_GARAGES_PROFILE_REQUESTED', true);
                    resolve();
                }).catch(error => {
                    reject(error);
                })
            })
        },

    }
};

export default garage
