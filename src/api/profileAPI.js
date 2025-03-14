import axios from "axios";

let instance = axios.create({
    headers: {
        "API-KEY": "9d766657-a1ea-4080-9e94-ce726fdc7fa3",
    },
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

let profileAPI = {
    auth() {
        return instance
                .get("auth/me/")
                .then(response => response.data);
    },
    getProfile(id) {
        return instance
                .get(`profile/${id}`)
                .then(response => response.data);
    },
    getStatus(id) {
        return instance
                .get(`profile/status/${id}`)
                .then(response => response.data);
    },
    updateStatus(status) {
        return instance
                .put(`profile/status/`, {
                    status,
                })
                .then(response => response.data);
    },
    login({ email, password, rememberMe }) {
        return instance
                .post(`auth/login/`, {
                    email,
                    password,
                    rememberMe,
                })
                .then(response => response.data);
    },
    logout() {
        return instance
                .delete("auth/login/")
                .then(response => response.data);
    },
}

export default profileAPI;