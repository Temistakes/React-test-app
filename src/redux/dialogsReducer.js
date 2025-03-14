const ADD_MESSAGE = "first/dialogs/ADD_MESSAGE";

const initialState = {
    dialogs: [
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ZvhB7_r6bQKMECcWQhtTfvYlGo-5RVc0Ag&s", id: 1, name: "Dmitry" },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ZvhB7_r6bQKMECcWQhtTfvYlGo-5RVc0Ag&s", id: 2, name: "BreBreBre" },
    ],
    messages: [
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, animi!",
            isMe: false,
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, animi!",
            isMe: true,
        },
    ],
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case (ADD_MESSAGE):
            let message = {
                id: state.messages.length + 1,
                text: action.value,
                isMe: false,
            }
            
            return {
                ...state,
                messages: [...state.messages, message],
                input: "",
            }

        default:
            return state;
    }
}

export default dialogsReducer;

// Action Creators

export const addMessage = value => ({
    type: ADD_MESSAGE,
    value,
});