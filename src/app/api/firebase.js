import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, setDoc, doc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-UCoqwm2jjL7WwNMOY1o_WRmkaGIxCxw",
  authDomain: "webapplication-6cb07.firebaseapp.com",
  projectId: "webapplication-6cb07",
  storageBucket: "webapplication-6cb07.appspot.com",
  messagingSenderId: "769887938615",
  appId: "1:769887938615:web:8c1e25b6c57aa7eedbf7b2",
  measurementId: "G-XTGHPM77Z9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, setDoc, doc};
