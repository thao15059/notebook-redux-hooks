import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4s1Me-nytprP43nJxpFTL_8t-Pey4kxs",
  authDomain: "notebook-bdcc3.firebaseapp.com",
  projectId: "notebook-bdcc3",
  storageBucket: "notebook-bdcc3.appspot.com",
  messagingSenderId: "39170736057",
  appId: "1:39170736057:web:7d2c0998a8a805d1e70068",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
