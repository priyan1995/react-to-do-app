
import * as firebase from 'firebase';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBM3GerJtBBQdpwJTFg99WdAEf3ZJb3m9Y",
    authDomain: "react-to-do-e8cc2.firebaseapp.com",
    databaseURL: "https://react-to-do-e8cc2-default-rtdb.firebaseio.com",
    projectId: "react-to-do-e8cc2",
    storageBucket: "react-to-do-e8cc2.appspot.com",
    messagingSenderId: "174613237022",
    appId: "1:174613237022:web:98118c34281342c47ecd0f",
    measurementId: "G-GTXV7Q7CYM"
  };

  const FirebaseDb = firebase.initializeApp(firebaseConfig);

  export default FirebaseDb.database().ref() ;