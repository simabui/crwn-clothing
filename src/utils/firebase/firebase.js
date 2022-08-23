import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvpeRPZ1CxTKHxaJrKowhTv-858jm2ZJE",
  authDomain: "crwn-clth-db-b4f2f.firebaseapp.com",
  projectId: "crwn-clth-db-b4f2f",
  storageBucket: "crwn-clth-db-b4f2f.appspot.com",
  messagingSenderId: "677566729804",
  appId: "1:677566729804:web:1a08e20b7f9d85d8e1aee9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWIthGooglePopup = () => signInWithPopup(auth, provider);
