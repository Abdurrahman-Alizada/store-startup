import firebase from "firebase/compat/app";
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    
    apiKey: "AIzaSyDfzy4uxamHvm0mvxIOOJttCwn231Lnv00",
    authDomain: "store-69e76.firebaseapp.com",
    projectId: "store-69e76",
    storageBucket: "store-69e76.appspot.com",
    messagingSenderId: "508490106766",
    appId: "1:508490106766:web:7629af9728f832e46586df",
    databaseURL: "https://peakn-cbb73.firebaseio.com",
    measurementId: "G-GX7DBET37C"
};
// Initialize Firebase
export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// db = firebase.firestore();

// export const dbOrderRef = db.collection('order');

// export const orderData = db.collection('order').get()