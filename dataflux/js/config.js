const firebaseConfig = {
  apiKey: "AIzaSyC6zVsQHZIJdlSNoybVk8-ZLjdWvDRl764",
  authDomain: "attendance-285a9.firebaseapp.com",
  databaseURL: "https://attendance-285a9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "attendance-285a9",
  storageBucket: "attendance-285a9.firebasestorage.app",
  messagingSenderId: "258703109270",
  appId: "1:258703109270:web:9beaaa01fc6d8a2b9de6b7",
  measurementId: "G-Z48WCPWGEZ"
};

firebaseConfig.initializeAPP(firebaseConfig);
const auth = firebase.auth()