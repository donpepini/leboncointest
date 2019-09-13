import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDC9hfflNObmZP7GNIzYQx-vLoCPHFGyoM",
    authDomain: "hh-leboncoin.firebaseapp.com",
    databaseURL: "https://hh-leboncoin.firebaseio.com",
    projectId: "hh-leboncoin",
    storageBucket: "",
    messagingSenderId: "1040614173224",
    appId: "1:1040614173224:web:4c44e14e72cee90757e31d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;