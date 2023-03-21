import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuJK9jqJCs6iq8UYUjnHytPte81Wa75yc",
  authDomain: "myapp-b0790.firebaseapp.com",
  projectId: "myapp-b0790",
  storageBucket: "myapp-b0790.appspot.com",
  messagingSenderId: "165451627500",
  appId: "1:165451627500:web:4fc41df4ad63d95e4c5ec9",
  measurementId: "G-L60JV0KNHB",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
