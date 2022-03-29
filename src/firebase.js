
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase";
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  databaseURL: "https://notecafev2-default-rtdb.asia-southeast1.firebasedatabase.app",
  apiKey: "AIzaSyBcsc1YzNf6EEuI_m1vR-e0m2MaqYsZHfA",
  authDomain: "notecafev2.firebaseapp.com",
  projectId: "notecafev2",
  storageBucket: "notecafev2.appspot.com",
  messagingSenderId: "938464769996",
  appId: "1:938464769996:web:a085ac37ee807d884c8f69",
  measurementId: "G-RYLK81HF59"
};

firebase.initializeApp(firebaseConfig);



export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

export const database = firebase.database();