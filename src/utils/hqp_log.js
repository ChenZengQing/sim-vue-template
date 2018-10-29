
let isPro = process.env.NODE_ENV === 'production';

const Log ={
    log(...params){
        if (!isPro) {
            console.log(...params);
        }
    },
    error(...params) {
        if (!isPro) {
            console.error(...params);
        }
    },
    info(...params) {
        if (!isPro) {
            console.info(...params);
        }
    }
};

export default {
    install(Vue) {
        Object.defineProperty(Vue.prototype, 'Log', {value: Log})
    }
}
