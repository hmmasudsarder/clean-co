// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeDtoJs_W1PgCpzCWMuqZqn6KU6MkN_p8",
  authDomain: "clean-co-b0eab.firebaseapp.com",
  projectId: "clean-co-b0eab",
  storageBucket: "clean-co-b0eab.appspot.com",
  messagingSenderId: "85786772262",
  appId: "1:85786772262:web:65cb7ec6425b5174ee37e7",
  measurementId: "G-TYM1H58P3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// const analytics = getAnalytics(app);