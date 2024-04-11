// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB0JU9uTurkAl85PYkG5Y7PhOA5vkadzQ0",
  authDomain: "waterlevel-40ce2.firebaseapp.com",
  databaseURL: "https://waterlevel-40ce2-default-rtdb.firebaseio.com",
  projectId: "waterlevel-40ce2",
  storageBucket: "waterlevel-40ce2.appspot.com",
  messagingSenderId: "548432139128",
  appId: "1:548432139128:web:cf2008dab0df08f8fd6e8d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebaseConfig;
