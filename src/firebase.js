import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPPx28jAB2_7HyKp78N0ebVSCa0GnwWc8",
  authDomain: "blog-d6195.firebaseapp.com",
  projectId: "blog-d6195",
  storageBucket: "blog-d6195.appspot.com",
  messagingSenderId: "174211508018",
  appId: "1:174211508018:web:002167005138c5cc2e992b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
