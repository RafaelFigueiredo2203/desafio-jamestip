import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD63dKVAfSQm9q5U53TO7RSwYXt1il170",
  authDomain: "sistemachamad.firebaseapp.com",
  projectId: "sistemachamad",
  storageBucket: "sistemachamad.appspot.com",
  messagingSenderId: "90424682157",
  appId: "1:90424682157:web:5a706881092ae646474824",
  measurementId: "G-B3LYZW4SCJ"
};
// Initialize Firebase
if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);  
}

export default firebase;