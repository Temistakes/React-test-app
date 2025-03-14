// AC Constants

import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

// Store

let store = {

    // State

    _state: {
        dialogsPage: {
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
            input: "",
        },
        profilePage: {
            posts: [
                { id: 1, message: "Бре Бре Бре erjfgio", likecount: 123 },
                { id: 2, message: "Бре Бре Бре", likecount: 1223 },
            ],
            input: "",
        },
        sidebar: {
            sidebar: [
                { url: "/", name: "Главная" },
                { url: "/dialogs/", name: "Диалоги" },
                { url: "/feed/", name: "Новости" },
                { url: "/music/", name: "Музыка" },
                { url: "/settings/", name: "Настройки" },
            ]
        },
    },

    getState() {
        return this._state;
    },

    // Subscriber ( Observer Pattern )

    _notify() {
        console.log("No observers.");
    },

    subscribe(observer) {
        this._notify = observer;
    },

    // Dispatch

    dispatch(action) {
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._notify(this._state);
    },

}

window.store = store;

export default store;