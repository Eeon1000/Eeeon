js/firebase-config.js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "Eeeon.firebaseapp.com",
  databaseURL: "https://Eeeon.firebaseio.com",
  projectId: "Eeeon",
  storageBucket: "Eeeon.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

firebase.initializeApp(firebaseConfig);
