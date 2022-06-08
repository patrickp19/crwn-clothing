import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5JO0Bf-XmX8wcsTx0IZZVC1uyl_5lpUw",
  authDomain: "crwn-clothing-db-f21b4.firebaseapp.com",
  projectId: "crwn-clothing-db-f21b4",
  storageBucket: "crwn-clothing-db-f21b4.appspot.com",
  messagingSenderId: "141861849516",
  appId: "1:141861849516:web:60e3c07c3eb7eb89239209",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users ", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  //if user data exists

  //if user data does not exist
  //create / set the document with the data from userAuth in my collection

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
