import {GET_USERS} from "../actions/types";

const initialState = {
    users: []
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return {
                ...state
            }
    }
}

export default authReducer;
