import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import "firebase/auth";
import "firebase/firestore";
import firebase from "./fbConfig/fbConfig";
import rootReducer from "./Reducers/rootReducer";
import { createFirestoreInstance } from "redux-firestore";


const rrfConfig = {
    userProfile: "users",
    useFirestoreForProfile: true
}

export const store = createStore( rootReducer, applyMiddleware(thunk)  );

export const rrfProps ={
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

