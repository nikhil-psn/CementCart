import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBWKenxyOgqqc58YHXTAd8XyB9XwgJ8pEM",
  authDomain: "cement-cart-v0.firebaseapp.com",
  projectId: "cement-cart-v0",
  storageBucket: "cement-cart-v0.appspot.com",
  messagingSenderId: "924594028359",
  appId: "1:924594028359:web:dcc9abc896dfe656185662",
  measurementId: "G-SPZMFCY7P7"
};


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

// // !firebase.apps.length ? firebaseConfig.initializeApp(firebaseConfig) : firebaseConfig.app() 
// const app = initializeApp(firebaseConfig);

// const db = firestore(app)

// export {app, db };