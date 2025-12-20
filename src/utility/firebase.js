import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvj62OWbJiKWk35IpMwtoRCpTvcFx1QNU",
  authDomain: "clone-63987.firebaseapp.com",
  projectId: "clone-63987",
  storageBucket: "clone-63987.firebasestorage.app",
  messagingSenderId: "599122682312",
  appId: "1:599122682312:web:b4d4cf0cb032e09a67e0fd",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
