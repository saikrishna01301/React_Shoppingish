// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use.
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTCKdeuZtCnCA6WOPe5GvFv66uT_LlQuw",
  authDomain: "shoppingish-db.firebaseapp.com",
  projectId: "shoppingish-db",
  storageBucket: "shoppingish-db.appspot.com",
  messagingSenderId: "522255388400",
  appId: "1:522255388400:web:26bbb6206c4a36b63fbc35",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//it opens google auth provider prompt with selection of google acc
//we can have multiple providers
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

//create auth instance
//it communicate with firebase
export const auth = getAuth();

//creating popup with google provider
//auth is to authentication it check whether the auth_token is valid or not
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

///////////////////////////////////////
//it creates database instance in firestore
export const db = getFirestore();

//it's async bcz fetching data from google auth
export const createUserDocFromAuth = async (userAuth) => {
  //doc(database, doc_name(collection), some_identifiers like id )
  //it checks if users collection is exist or not, if not it creates one
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userAuth);

  //it waits until userDocRef
  //it checks if there is any data or not
  const userSnapshot = await getDoc(userDocRef);

  //userSnapshot.exist() : exist() method allows us to check
  //   is there is any instance of data or not
  //if not exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      //it sets data in doc at particular ref setDoc(ref,{})
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("some error occured", error.message);
    }
  }

  return userSnapshot;
};
