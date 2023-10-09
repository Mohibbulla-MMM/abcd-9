import { initializeApp } from "firebase/app";

// shudhu dekhar jonno
// console.log('inside firebase config', import.meta.env.VITE_PASS)

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// Initialize Fimport.meta.env.
const app = initializeApp(firebaseConfig);

export default app;
