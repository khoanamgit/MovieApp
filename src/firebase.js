// // // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // // Your web app's Firebase configuration
// // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
//   projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID ,
//   storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ,
//   messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER,
//   appId:process.env.REACT_APP_APP_ID,
// //   measurementId: "G-GET4MEW1PJ"
// };


// // // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// // // const analytics = getAnalytics(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0NSVvFk5eedWNRxXN35JJBNCckD83taw",
  authDomain: "netflix-react-d373b.firebaseapp.com",
  projectId: "netflix-react-d373b",
  storageBucket: "netflix-react-d373b.appspot.com",
  messagingSenderId: "34378936587",
  appId: "1:34378936587:web:6dd120ebb0e4fd04baf20e",
  measurementId: "G-GET4MEW1PJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);