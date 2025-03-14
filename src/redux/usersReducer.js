import usersAPI from "../api/usersAPI";
import addPropsObj from "../components/common/helper/helper";

const SHOW_MORE = "first/users/SHOW_MORE";
const FOLLOW = "first/users/FOLLOW";
const UNFOLLOW = "first/users/UNFOLLOW";
const SET_USERS = "first/users/SET_USERS";
const SET_PAGE = "first/users/SET_PAGE";
const SET_TOTAL_USERS_COUNT = "first/users/SET_TOTAL_USERS_COUNT";
const SET_IS_FETCHING = "first/users/SET_IS_FETCHING";
const SET_FOLLOWING_IN_PROGRESS = "first/users/SET_FOLLOWING_IN_PROGRESS";
const FAKE = "first/users/FAKE";

const initialState = {
    users: [],
    usersCount: 30,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    fakeCount: 0,
    portionSize: 5,
}

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case (SHOW_MORE):
            return {
                ...state,
                usersCount: state.usersCount += 4,
            }
        case (FOLLOW):
            return {
                ...state,
                users: addPropsObj("id", action.id, state.users, { followed: true }),
            };
        case (UNFOLLOW):
            return {
                ...state,
                users: addPropsObj("id", action.id, state.users, { followed: false }),
            };
        case (SET_USERS):
            return {
                ...state,
                users: action.users,
                totalUsersCount: action.count,
            }
        case (SET_PAGE):
            return {
                ...state,
                currentPage: action.page,
            }
        case (SET_TOTAL_USERS_COUNT):
            return {
                ...state,
                totalUsersCount: action.count,
            }
        case (SET_IS_FETCHING):
            return {
                ...state,
                isFetching: action.val,
            }
        case (SET_FOLLOWING_IN_PROGRESS):
            return {
                ...state,
                followingInProgress: action.isFetching ?
                                    [...state.followingInProgress, action.id] :
                                    state.followingInProgress.filter(id => id !== action.id),
            }
        case (FAKE):
            return {
                ...state,
                fakeCount: state.fakeCount++,
            }
        default:
            return state;
    }
}

export default usersReducer;

// Action Creators

export const showMore = () => ({
    type: SHOW_MORE,
});

export const followSuccess = id => ({
    type: FOLLOW,
    id,
});

export const unfollowSuccess = id => ({
    type: UNFOLLOW,
    id,
});

export const setUsers = users => ({
    type: SET_USERS,
    users,
});

export const setCurrentPage = page => ({
    type: SET_PAGE,
    page,
});

export const setTotalUsersCount = count => ({
    type: SET_TOTAL_USERS_COUNT,
    count,
});

export const setFetching = val => ({
    type: SET_IS_FETCHING,
    val,
});

export const setFollowingInProgress = (id, isFetching) => ({
    type: SET_FOLLOWING_IN_PROGRESS,
    id,
    isFetching,
});

export const getUsers = (page, usersCount) => async dispatch => {
    dispatch(setFetching(true));

    const responce = await usersAPI.getUsers(page, usersCount);

    dispatch(setUsers(responce.items));
    dispatch(setTotalUsersCount(responce.totalCount));
    dispatch(setFetching(false));
}

const followFlow = async (dispatch, apiMethod, action, id) => {
    dispatch(setFollowingInProgress(id, true));

    const response = await apiMethod(id);

    if (response.resultCode === 0) {
        dispatch(action(id));
        dispatch(setFollowingInProgress(id, false));
    }
}

export const follow = id => async dispatch => {
    followFlow(dispatch, usersAPI.followUser, followSuccess, id);
}

export const unfollow = id => async dispatch => {
    followFlow(dispatch, usersAPI.unfollowUser, unfollowSuccess, id);
}

export const setPage = (page, usersCount) => dispatch => {
    dispatch(setCurrentPage(page));
    dispatch(getUsers(page, usersCount));
}