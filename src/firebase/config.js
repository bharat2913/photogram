import  firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyCUmvWO0hTD5AZNJB1ndOemAUIvOL7lDh0",
    authDomain: "firegram-99c53.firebaseapp.com",
    projectId: "firegram-99c53",
    storageBucket: "firegram-99c53.appspot.com",
    messagingSenderId: "165394237415",
    appId: "1:165394237415:web:29f76e80a93f43b5351f42"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };