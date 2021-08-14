import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAyyZucrm3_UTh2KSLIzPwD5mmlumoyHwc",
  authDomain: "dictionary-app-e0dec.firebaseapp.com",
  projectId: "dictionary-app-e0dec",
  storageBucket: "dictionary-app-e0dec.appspot.com",
  messagingSenderId: "236897600034",
  appId: "1:236897600034:web:b6ea5abeff11c32013407b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
