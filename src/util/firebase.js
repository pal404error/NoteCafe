
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase";
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfI0LFYCN9AbtastKQ-XRCzdVW69_gb64",
  authDomain: "notee-eb942.firebaseapp.com",
  databaseURL: "https://notee-eb942-default-rtdb.firebaseio.com",
  projectId: "notee-eb942",
  storageBucket: "notee-eb942.appspot.com",
  messagingSenderId: "1082831555961",
  appId: "1:1082831555961:web:0411ac19cd73c9237f73a8"
};

firebase.initializeApp(firebaseConfig);



export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;