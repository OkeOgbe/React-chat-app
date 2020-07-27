import {createStore, combineReducers, compose} from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import {ReactReduxFirebaseProvider, firebaseReducer, reactReduxFirebase} from 'react-redux-firebase';
import {createFirestoreInstance, firestoreReducer} from 'redux-firestore';

//Custom Reducers


//firebase Config
const fbConfig = {
    apiKey: "AIzaSyAVspltswIH3ckVlQRvTAnYn1jl9sb7Wsk",
    authDomain: "react-firebase-auth-eb862.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-eb862.firebaseio.com",
    projectId: "react-firebase-auth-eb862",
    storageBucket: "react-firebase-auth-eb862.appspot.com",
    messagingSenderId: "969452592804",
    appId: "1:969452592804:web:cb21a12d0e6deae6411031"
}


//react-redux-firebase Config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
}

//initialize firebase
firebase.initializeApp(fbConfig);
//initialize firestore
firebase.firestore();

//Adding firebase to Reducers
const rootReducer = combineReducers({firebase: firebaseReducer, firestore: firestoreReducer});


//Creating store with initial state
const initialState = {};
const store = createStore( rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) );

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance 
}

export default store;