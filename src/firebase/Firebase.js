import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAyyVPE7RqsoKFkAV4AyutXvAFfvz_nxQA",
    authDomain: "ealt-altamirano.firebaseapp.com",
    projectId: "ealt-altamirano",
    storageBucket: "ealt-altamirano.appspot.com",
    messagingSenderId: "1079668480795",
    appId: "1:1079668480795:web:72a3f2e526c6f0067151be"
})

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);