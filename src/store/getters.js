
const getters = {
    tabs: state => state.tabbar.tabs,
    selected: state => state.tabbar.selected,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
};
export default getters
