import { firebase } from '@firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyARIH5KoAbogGEkouS5uKr2cbF_RH63xDQ",
  authDomain: "pokemon-go-redfox.firebaseapp.com",
  projectId: "pokemon-go-redfox",
  storageBucket: "pokemon-go-redfox.appspot.com",
  messagingSenderId: "606066514877",
  appId: "1:606066514877:web:29d6e0f8de641a5ee590d4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const auth_class = firebase.auth;

export default {
  auth,
  auth_class 
}