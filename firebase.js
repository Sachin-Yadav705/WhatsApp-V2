import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6KGWxR_PakQ7m1YpYyub3kmSs6-CX1PY",
  authDomain: "whatapp-clone-28164.firebaseapp.com",
  projectId: "whatapp-clone-28164",
  storageBucket: "whatapp-clone-28164.appspot.com",
  messagingSenderId: "781241252783",
  appId: "1:781241252783:web:e39fc50f4ab51d071c8d5a",
};

const app = !firebase.apps.lenght
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
