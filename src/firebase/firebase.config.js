import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyB9VTvY-sb1jHg8ln-VdRvZI6r8Z5ZUDf8",
  authDomain: "mern-book-inventory-17069.firebaseapp.com",
  projectId: "mern-book-inventory-17069",
  storageBucket: "mern-book-inventory-17069.appspot.com",
  messagingSenderId: "872331561073",
  appId: "1:872331561073:web:f905b26cb586a22ad9b3d0",
  measurementId: "G-5VGRV5M8C1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;