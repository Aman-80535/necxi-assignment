import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyvzjGTt2qfUGG_0RB8n2LeitByjdCfl4",
  authDomain: "necxis-assignment.firebaseapp.com",
  projectId: "necxis-assignment",
  storageBucket: "necxis-assignment.appspot.com",
//   messagingSenderId: "YOUR_SENDER_ID",
//   appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
