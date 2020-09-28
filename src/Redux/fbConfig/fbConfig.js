import firebase from "firebase"

const fbConfig = {
    apiKey: "AIzaSyAbrcckEBMQhq4BU04l0fuzIcIzs4rPcJk",
    authDomain: "react-chat-app-b0f97.firebaseapp.com",
    databaseURL: "https://react-chat-app-b0f97.firebaseio.com",
    projectId: "react-chat-app-b0f97",
    storageBucket: "react-chat-app-b0f97.appspot.com",
    messagingSenderId: "627214608133",
    appId: "1:627214608133:web:0430dff1723febd28b796c",
    measurementId: "G-M1NBVBFN5G"
};


//Initialise firebase
export const fire = firebase.initializeApp(fbConfig);

//firestore instance
firebase.firestore();

export default firebase;