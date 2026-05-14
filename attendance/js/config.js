// config.js - CORRECTED VERSION

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// Initialize Firebase
// For Firebase JS SDK v7.20.0 and later
if (typeof firebase !== 'undefined') {
  // Using Firebase v8 or older (namespaced)
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const database = firebase.database();
  const auth = firebase.auth();
} else if (typeof initializeApp !== 'undefined') {
  // Using Firebase v9+ (modular)
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase(app);
  const auth = getAuth(app);
}



function logout(){
  firebase.auth().signOut().then(() => {
    window.location.href = "index.html"
  })
  .catch((error) => {
    alert(error)
  })
}

