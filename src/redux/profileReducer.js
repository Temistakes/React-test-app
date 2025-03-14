import profileAPI from "../api/profileAPI";

const ADD_POST = "first/profile/ADD_POST";
const SET_PROFILE = "first/profile/SET_PROFILE";
const SET_STATUS = "first/profile/SET_STATUS";
const DELETE_POST = "first/profile/DELETE_POST";

const initialState = {
    posts: [
        { id: 1, message: "Бре Бре Бре erjfgio", likecount: 123 },
        { id: 2, message: "Бре Бре Бре", likecount: 1223 },
    ],
    profile: null,
    status: null,
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case (ADD_POST):
            let post = {
                id: state.posts.length + 1,
                message: action.value,
                likecount: 0,
            }
            
            return {
                ...state,
                posts: [...state.posts, post],
                input: "",
            }
        case (DELETE_POST):
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id),
            }

        case (SET_PROFILE):
            return {
                ...state,
                profile: action.profile,
            }

        case (SET_STATUS):
            return {
                ...state,
                status: action.status,
            }

        default:
            return state;
    }
}

export default profileReducer;

// Action Creators

export const addPost = value => ({
    type: ADD_POST,
    value,
});

export const deletePost = id => ({
    type: DELETE_POST,
    id,
});

export const setProfile = profile => ({
    type: SET_PROFILE,
    profile,
});

export const setStatus = status => ({
    type: SET_STATUS,
    status
});

export const getProfile = (id) => async dispatch => {
    const response = await profileAPI.getProfile(id);
    dispatch(setProfile(response));
};

export const getStatus = id => async dispatch => {
    const response = await profileAPI.getStatus(id);
    dispatch(setStatus(response));
}

export const updateStatus = status => async dispatch => {
    const response = await profileAPI.updateStatus(status);
    if (response.resultCode === 0) {
        dispatch(setStatus(status));
    }
}