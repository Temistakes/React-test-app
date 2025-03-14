let initialState = {
    sidebar: [
        { url: "/", name: "Главная" },
        { url: "/dialogs/", name: "Диалоги" },
        { url: "/feed/", name: "Новости" },
        { url: "/music/", name: "Музыка" },
        { url: "/settings/", name: "Настройки" },
        { url: "/users/", name: "Пользователи" },
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;