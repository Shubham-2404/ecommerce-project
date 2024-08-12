import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBy2fjNPNru1OADC0ARdocC6mT_1XDOCBM",
  authDomain: "ecomdatabase-48bb6.firebaseapp.com",
  projectId: "ecomdatabase-48bb6",
  storageBucket: "ecomdatabase-48bb6.appspot.com",
  messagingSenderId: "511684548256",
  appId: "1:511684548256:web:faec5875fa615d0ed79bc5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
