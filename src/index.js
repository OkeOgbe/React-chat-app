import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from './Config/firebaseConfig'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createFirestoreInstance } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase, isLoaded} from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import rootReducer from './Reducers/rootReducer';


function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div id="preloader"><div id="loader"></div></div>;
  return children
}

const store= createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({getFirebase})))

const rrfProps={
  firebase,
  config: {
    userProfile: "Users",
    useFirestoreForProfile: true,
    enableLogging: false
  },
  dispatch: store.dispatch,
  createFirestoreInstance
}



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


