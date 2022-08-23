import { initializeApp } from "firebase/app";
import * as auth from "firebase/auth";
import * as firestore from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDQr-H2wR736qlWfQeyJj5m6vxpeXrItHE",
  authDomain: "sigma-04.firebaseapp.com",
  databaseURL: "https://sigma-04-default-rtdb.firebaseio.com",
  projectId: "sigma-04",
  storageBucket: "sigma-04.appspot.com",
  messagingSenderId: "376891827092",
  appId: "1:376891827092:web:b05123e8a3987f4d60e581"
};


const app = initializeApp(firebaseConfig);

export { app, auth, firestore };
