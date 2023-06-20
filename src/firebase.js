// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDxxDsvnRbOGlhUbGX2Wv_n9M175GTMABM',
  authDomain: 'portfolio-d6455.firebaseapp.com',
  projectId: 'portfolio-d6455',
  storageBucket: 'portfolio-d6455.appspot.com',
  messagingSenderId: '646963789340',
  appId: '1:646963789340:web:21fc883c65d5357bbb69d9',
  measurementId: 'G-CW3B60GZS7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
