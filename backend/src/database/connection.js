import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBEayDUVlJeXAyJSozomEOybEEwpE9Zvf0",
    authDomain: "teste-full-b6ac0.firebaseapp.com",
    databaseURL: "https://teste-full-b6ac0-default-rtdb.firebaseio.com",
    projectId: "teste-full-b6ac0",
    storageBucket: "teste-full-b6ac0.appspot.com",
    messagingSenderId: "444662958541",
    appId: "1:444662958541:web:d21c40e5ba0545e559dc84",
    measurementId: "G-CC290PZQGW"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();