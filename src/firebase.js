import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth' 

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCN8CMTxXnt5yfxdUa94dZ7VGk6JWwoWAg",
    authDomain: "tarea-231d2.firebaseapp.com",
    databaseURL: "https://tarea-231d2.firebaseio.com",
    projectId: "tarea-231d2",
    storageBucket: "tarea-231d2.appspot.com",
    messagingSenderId: "654118110849",
    appId: "1:654118110849:web:c00d13008c1bb0a1e2ef80"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const auth = firebase.auth()

  export {db, auth}