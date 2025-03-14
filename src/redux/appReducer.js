import { auth } from "./authReducer";

const SET_INITIALIZED = "first/app/SET_INITIALIZED";

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case (SET_INITIALIZED):
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export default appReducer;

// AC

export const setInitialized = () => ({
    type: SET_INITIALIZED,
});

export const initializedApp = () => dispatch => {
    Promise.all([dispatch(auth())])
        .then(() => {
            dispatch(setInitialized());
        });
};