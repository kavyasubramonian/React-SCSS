import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBIWMpOHKVNG4B3C3XX6e4Ghq9iRYA7itI",
    authDomain: "react-app-ee0e1.firebaseapp.com",
    projectId: "react-app-ee0e1",
    storageBucket: "react-app-ee0e1.appspot.com",
    messagingSenderId: "566027932336",
    appId: "1:566027932336:web:793f9119356f5ab8f66175"
});

var db = firebaseApp.firestore();

export { db };