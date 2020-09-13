import { SEARCH } from "./endpoint";
import Api from "./api";

export function list_data(body) {
    console.warn("body..", body);
    let formData = new FormData();
    formData.append("search", body.data);
    formData.append("type", body.type);
    return function (dispatch) {
        dispatch({ type: "DATA_SEARCH_FETCHING" });

        Api("post", SEARCH, formData).then((response) => {
            console.warn("datalist//Response", response);
            if (Response) {
                dispatch({ user: response, type: "DATA_SEARCH_FETCHING_SUCCESS" });
            } else {
                dispatch({ errorMessgae: response, type: "DATA_SEARCH_FETCHING_FAILED" });
            }
        });
    };
}
export function reset_list_data() {
    return { type: "DATA_SEARCH_RESET" };
}
