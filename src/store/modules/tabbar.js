
const tabbar = {
    state: {
        tabs: [],
        selected: ''
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
            commit('CHANGE_SELECTED', selected);
        },
        SetTabs({commit},tabs) {
            commit('SET_TABS', tabs);
        },
    }
};

export default tabbar
