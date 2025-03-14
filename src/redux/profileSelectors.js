export const getStateProfile = state => {
    return state.profilePage.profile;
}

export const getStateStatus = state => {
    return state.profilePage.status;
}

export const getAuthId = state => {
    return state.auth.id;
}

export const getIsAuth = state => {
    return state.auth.isAuth;
}