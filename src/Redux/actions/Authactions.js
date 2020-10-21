import {SIGNUP_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS, FORGOT_PASSWORD} from './types';
import swal from 'sweetalert';
import fire from '../fbConfig/fbConfig';
import {db} from '../fbConfig/fbConfig';

export const createNewUser = (newUser) => dispatch => {
    const {name, username, email, password} = newUser;
    fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
            db
                .collection('users')
                .add({uid: user.user.uid, name, username, email, password})
        })
        .then((user) => {
            swal({title: "Welcome to Howdy", text: "May I take your coat?", icon: "success"})
        })
        .catch((err) => {
            swal({title: "Sorry Boss", text: err.message, icon: "error"})
        });
    dispatch({type: SIGNUP_SUCCESS, payload: email, password})
}

export const loginUser = (email, password) => dispatch => {
    fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
            swal({title: "Welcome Back", text: "It's been a while, How you been?", icon: "success"})
        })
        .catch((err) => {
            swal({title: "Sorry unfortunately you can't come inside", text: err.message, icon: "error"})
        });
    dispatch({type: LOGIN_SUCCESS, payload: email, password})
}

export const forgotpass = (email) => dispatch => {
    fire
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => {
            swal({title: "See you soon", text: "A reset link has been sent to your email", icon: "success"})
        })
        .catch((err) => {
            swal({title: "Sorry, unfortunately we cant process your request", text: err.message, icon: "error"})

        });
    dispatch({type: FORGOT_PASSWORD, payload: email})
}

