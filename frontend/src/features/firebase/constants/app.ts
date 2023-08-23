import { FirebaseOptions, initializeApp } from "firebase/app";
import { safeInit } from "./../operators/safeInit";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyAMtG6b23AqO2WbJ2ad8SKMXD1X4tfALtc",
  authDomain: "peloton-alerts.firebaseapp.com",
  projectId: "peloton-alerts",
  storageBucket: "peloton-alerts.appspot.com",
  messagingSenderId: "331185140393",
  appId: "1:331185140393:web:5f49c5c60b8b162914efb8",
  measurementId: "G-R2QRE36WEQ",
  databaseURL: "https://peloton-alerts-default-rtdb.firebaseio.com/",
};

export const app = safeInit(() => initializeApp(firebaseConfig));
