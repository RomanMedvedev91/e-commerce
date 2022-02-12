import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAJ8J_IM_nQulGAcAssHnoN4GWUYgOlofY",
  authDomain: "e-commerce-f51fc.firebaseapp.com",
  projectId: "e-commerce-f51fc",
  storageBucket: "e-commerce-f51fc.appspot.com",
  messagingSenderId: "471196263642",
  appId: "1:471196263642:web:7df8e99bafb51d40e431e3",
  measurementId: "G-H9BBGJ6SWW",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
