import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyArTaRH2rGfoNVoWhIvXSZ-4f0WIxEgsAo",
  authDomain: "disneyplus-clone-e3564.firebaseapp.com",
  projectId: "disneyplus-clone-e3564",
  storageBucket: "disneyplus-clone-e3564.firebasestorage.app",
  messagingSenderId: "229090410330",
  appId: "1:229090410330:web:577ca2b4fdd5a1e7d3bd63"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;