import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC11wKhxeu-1_oQefeKJAYJmLzOD83ORZc",
  authDomain: "pwat-70b60.firebaseapp.com",
  projectId: "pwat-70b60",
  storageBucket: "pwat-70b60.appspot.com",
  messagingSenderId: "111414079622",
  appId: "1:111414079622:web:14d3ab76f98788edb52107"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
