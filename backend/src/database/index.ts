import firebase from 'firebase/app'

import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAsFzfPhFJQ43K3Auw46SHXpt46jOtD53w",
    authDomain: "pokedex-150da.firebaseapp.com",
    databaseURL: "https://pokedex-150da-default-rtdb.firebaseio.com",
    projectId: "pokedex-150da",
    storageBucket: "pokedex-150da.appspot.com",
    messagingSenderId: "31046197502",
    appId: "1:31046197502:web:c0f82b3f3e881013a045af"
  };

  firebase.initializeApp(firebaseConfig)

  export const database = firebase.database()