import Cookies from "js-cookie";

const TAB_COOKIE_KEY = 'CHANGE_SELECTED';

const tabbar = {
    state: {
        tabs: [],
        selected: parseInt(Cookies.get(TAB_COOKIE_KEY)) || 0,
    },
    mutations: {
        CHANGE_SELECTED: (state, selected) => {
            state.selected = selected;

        },
        SET_TABS: (state, tabs) => {
            state.tabs = tabs;
        }
    },
    actions: {
        ChangeTab({commit}, selected) {
            Cookies.set(TAB_COOKIE_KEY, selected);
            commit('CHANGE_SELECTED', selected);
        },
        SetTabs({commit},tabs) {
            commit('SET_TABS', tabs);
        },
    }
};

export default tabbar
