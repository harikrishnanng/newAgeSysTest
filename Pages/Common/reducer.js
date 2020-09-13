let initialStage = {
    data: null,
    error: false,
    isLoading: false,
    errorMessgae: null,
    err: null
}

const list_data = (state = initialStage, actions) => {
    switch (actions.type) {
        case "DATA_SEARCH_FETCHING":
            return { ...state, isLoading: true, data: null, err: null }
            break;
        case "DATA_SEARCH_FETCHING_SUCCESS":
            return { ...state, isLoading: false, error: false, data: actions.user, err: null }
            break;
        case "DATA_SEARCH_FETCHING_FAILED":
            return { ...state, isLoading: false, error: true, data: null, err: actions.errorMessgae.response }
            break;
        case "DATA_SEARCH_RESET":
            return { ...state, isLoading: false, data: null, error: false, errorMessgae: null, err: null }
            break;
        default:
            return state
    }
}

export default list_data
