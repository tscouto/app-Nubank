import axios from "axios";

export const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",

})

api.interceptors.request.use((config) => {
    let loggedUser = 30
    config.data.userId = loggedUser
    return config
})