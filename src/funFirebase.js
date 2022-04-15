import firebase from "./firebase";
export const firebaseIdGenerator = () => new Promise(async(resolve, reject) => {
    try {
      firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.uid);
        resolve(user.uid);
      } else {
        reject("Not Found!!");
      }
  });
    } catch (error) {
      console.log(error);
      resolve(error.message);
    }
  })