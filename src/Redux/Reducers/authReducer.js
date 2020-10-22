import {GET_USERS} from "../actions/types";

const initialState = {
    users: []
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return{
                ...state,
                users: action.payload
            }
            break;
        default:
            return {
                ...state
            }
    }
}

export default authReducer;
