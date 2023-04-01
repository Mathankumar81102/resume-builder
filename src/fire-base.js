import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBY-YTXk3JW1mWWNawsNlHhsXDnWMkKpxU",
    authDomain: "tceresumebuilder.firebaseapp.com",
    projectId: "tceresumebuilder",
    storageBucket: "tceresumebuilder.appspot.com",
    messagingSenderId: "1029605917364",
    appId: "1:1029605917364:web:78954f1e353c319c8d8de1",
    measurementId: "G-RJVXQVH1F0"
  };
  const app=initializeApp(firebaseConfig)
  export const auth=getAuth(app)