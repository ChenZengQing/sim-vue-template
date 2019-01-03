
const getters = {
    tabs: state => state.tabbar.tabs,
    selected: state => state.tabbar.selected,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    garages: state => state.garage.garages,
    garagesRequested: state => state.garage.garagesRequested,
    garagesProfile: state => state.garage.garagesProfile,
    garagesProfileRequested: state => state.garage.garagesProfileRequested,

};
export default getters
