import {GET_MESSAGES} from "../actions/types";

const initialState = {
    messages: []
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES:
            return{
                ...state,
                messages: action.payload
            }
            break;
        default:
            return {
                ...state
            }
    }
}

export default authReducer;
