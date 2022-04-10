// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmCylPOFfCjoRLUOUnwlMdSObi4pQ-2tc",
  authDomain: "students-platform-cb1fd.firebaseapp.com",
  projectId: "students-platform-cb1fd",
  storageBucket: "students-platform-cb1fd.appspot.com",
  messagingSenderId: "229323379858",
  appId: "1:229323379858:web:0209b7783c18b913f7c24b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;