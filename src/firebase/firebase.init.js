// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC5jK4lnONA_O8rKV3Rw06p3I0NBB2YRDs",
//   authDomain: "zap-shift-final-delivery.firebaseapp.com",
//   projectId: "zap-shift-final-delivery",
//   storageBucket: "zap-shift-final-delivery.firebasestorage.app",
//   messagingSenderId: "946584421329",
//   appId: "1:946584421329:web:1012a7597e2bc4ce1916f0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);