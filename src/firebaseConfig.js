// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1m0ol0vcOuVO4_gGCoJoDNTjcacx98ZM",
  authDomain: "student-management-syste-a1282.firebaseapp.com",
  projectId: "student-management-syste-a1282",
  storageBucket: "student-management-syste-a1282.appspot.com",
  messagingSenderId: "537866431828",
  appId: "1:537866431828:web:b043d720181264d442acc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app)
export {db}