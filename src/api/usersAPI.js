import axios from "axios";

let instance = axios.create({
    headers: {
        "API-KEY": "9d766657-a1ea-4080-9e94-ce726fdc7fa3",
    },
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

let usersAPI = {
    followUser(id) {
        return instance
                .post(`follow/${id}`, {})
                .then(response => response.data);
    },
    unfollowUser(id) {
        return instance
                .delete(`follow/${id}`)
                .then(response => response.data);
    },
    getUsers(page = 1, userCount = 10) {
        return instance
                .get("users/", {
                    params: {
                        page,
                        count: userCount,
                    },
                })
                .then(response => response.data);
    },
}

export default usersAPI;