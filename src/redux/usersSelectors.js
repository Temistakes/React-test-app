import { createSelector } from "reselect";

export const getStateUsers = state => {
    return state.usersPage.users;
}

export const getFilteredUsers = createSelector(getStateUsers, (users) => {
    return users.filter(u => true);
});

export const getTotalCount = state => {
    return state.usersPage.totalUsersCount;
}

export const getUsersCount = state => {
    return state.usersPage.usersCount;
}

export const getCurrentPage = state => {
    return state.usersPage.currentPage;
}

export const getIsFetching = state => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = state => {
    return state.usersPage.followingInProgress;
}

export const getPortionSize = state => {
    return state.usersPage.portionSize;
}