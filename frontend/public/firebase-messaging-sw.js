/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyAMtG6b23AqO2WbJ2ad8SKMXD1X4tfALtc",
  authDomain: "peloton-alerts.firebaseapp.com",
  projectId: "peloton-alerts",
  storageBucket: "peloton-alerts.appspot.com",
  messagingSenderId: "331185140393",
  appId: "1:331185140393:web:5f49c5c60b8b162914efb8",
  measurementId: "G-R2QRE36WEQ",
  databaseURL: "https://peloton-alerts-default-rtdb.firebaseio.com/",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  if (!payload.notification) return;
  const { title, body } = payload.notification;
  const notificationOptions = {
    body,
    // icon: '/firebase-logo.png'
  };

  self.registration.showNotification(title, notificationOptions);
});
