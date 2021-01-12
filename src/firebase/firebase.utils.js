import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBXUfsAekzzXGA_C5iOvPqrMZE7A6-H_Ck",
    authDomain: "crwn-db-24963.firebaseapp.com",
    projectId: "crwn-db-24963",
    storageBucket: "crwn-db-24963.appspot.com",
    messagingSenderId: "992639361975",
    appId: "1:992639361975:web:2971424efd03813972fe32",
    measurementId: "G-97DTLMWK0Z"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    console.log(firestore.doc('users/123shgdjdhja'))
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;