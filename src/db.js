// Conveniently import this file anywhere to use db

import firebase from 'firebase/app'
import 'firebase/firestore'
import cfg from "../firebaseAccess.json"

const db = firebase
    .initializeApp(cfg)
    .firestore()

export default db
// Export types that exists in Firestore - Uncomment if you need them in your app
// const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }
