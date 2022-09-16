// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC5BzlHyU0QDzkjtwcJ2XK7qqb6_V6wsRM',
  authDomain: 'realtor-app-react.firebaseapp.com',
  projectId: 'realtor-app-react',
  storageBucket: 'realtor-app-react.appspot.com',
  messagingSenderId: '823526846261',
  appId: '1:823526846261:web:5f6334b5adee9584e8a67c',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
