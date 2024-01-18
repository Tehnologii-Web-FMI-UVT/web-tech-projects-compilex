import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL2XT3QZVCAg3pHTA2wqZzGAjcdnmWJeo",
  authDomain: "compilex-e9ebe.firebaseapp.com",
  projectId: "compilex-e9ebe",
  storageBucket: "compilex-e9ebe.appspot.com",
  messagingSenderId: "394691488376",
  appId: "1:394691488376:web:65b941913f353787821b8d"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};