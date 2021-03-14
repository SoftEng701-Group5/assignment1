import firebase from 'firebase'
require('firebase/auth')

const app = firebase.initializeApp({
    apiKey: "AIzaSyBziUug99HMl-cwPOzWnwHnzJxH_BmG-N8",
    authDomain: "se701-group-5-assignment-1.firebaseapp.com",
    projectId: "se701-group-5-assignment-1",
    storageBucket: "se701-group-5-assignment-1.appspot.com",
    messagingSenderId: "357803904307",
});

export default app;