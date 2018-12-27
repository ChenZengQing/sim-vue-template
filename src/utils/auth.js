import Cookies from 'js-cookie'

const TokenKey = 'KeepCar-Token';
const NameKey = 'KeepCar-Name';

export function getName() {
    return Cookies.get(NameKey);
}

export function setName(name) {
    return Cookies.set(NameKey, name);
}

export function getToken() {
    return Cookies.get(TokenKey);
}

export function setToken(token) {
    return Cookies.set(TokenKey, token);
}

export function removeToken() {
    return Cookies.remove(TokenKey);
}
