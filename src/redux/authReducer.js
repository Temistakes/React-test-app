import profileAPI from "../api/profileAPI";

const SET_USER_DATA = "first/auth/SET_USER_DATA";
const DELETE_USER_DATA = "first/auth/DELETE_USER_DATA";
const SET_IS_PROCESSED = "first/auth/SET_IS_PROCESSED";

const initialState = {
    login: null,
    id: null,
    email: null,
    isAuth: false,
    isProcessed: false,
}

function authReducer(state = initialState, action) {

    switch (action.type) {
        case (SET_USER_DATA):
            return {
                ...state,
                ...action.user,
                isAuth: true,
            }
        case (DELETE_USER_DATA):
            return {
                ...state,
                login: null,
                email: null,
                id: null,
                isAuth: false,
            }
        case (SET_IS_PROCESSED):
            return {
                ...state,
                isProcessed: action.val,
            }
        default:
            return state;
    }

}

export default authReducer;

// Action Creators

export const setUserData = (id, email, login) => ({
    type: SET_USER_DATA,
    user: {id, email, login},
});

export const deleteUserData = () => ({
    type: DELETE_USER_DATA,
});

export const setIsProcessed = val => ({
    type: SET_IS_PROCESSED,
    val,
});

export const auth = () => async dispatch => {
    const response = await profileAPI.auth();
    
    if (response.resultCode === 0) {
        let { id, email, login } = response.data;
        dispatch(setUserData(id, email, login));
    }
}

export const login = loginData => async dispatch => {
    dispatch(setIsProcessed(true));

    const response = await profileAPI.login(loginData);

    dispatch(setIsProcessed(false));

    if (response.resultCode === 0) {
        return Promise.resolve("success");
    }   else {
        return Promise.reject(response.messages[0]);
    }
}

export const logout = () => async dispatch => {
    const response = await profileAPI.logout();

    if (response.resultCode === 0) {
        dispatch(deleteUserData());
    }
}