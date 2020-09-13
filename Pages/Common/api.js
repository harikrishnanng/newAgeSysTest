import axios from "axios";
import { store } from "./store";

function select(state) {
    return null;
}

export default function request(type, url, params) {
    let token = select(store.getState());
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    axios.defaults.headers.common["Content-Type"] = "application/x-www-form-urlencoded";

    switch (type) {
        case "post":
            return axios
                .post(url, params)
                .then(function (response) {
                    console.log("Post response", response);
                    return response.data;
                })
                .catch(function (error) {
                    console.log("Server Error", error);
                    console.log("Server response", error);
                    return error;
                });
            break;

        default:
            break;
    }
}
