import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "AIzaSyAyi1DbYDtBKv3ol4kp3yZlxsGTmnKAWSY",
    authDomain: "good-neighbor-c929a.firebaseapp.com",
    projectId: "good-neighbor-c929a",
    storageBucket: "good-neighbor-c929a.appspot.com",
    messagingSenderId: "796765585511",
    appId: "1:796765585511:web:bd9d13d817f957798494c2",
    measurementId: "G-53QLDWH9W6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };