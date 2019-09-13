import firebase from "firebase/app";
import "firebase/firestore"; // NEW
import "firebase/auth";
const config = {
  apiKey: "AIzaSyDiZ_QOK85pdvwWhKbWOPDoiyf59UG12dg",
  authDomain: "blogeek-a21da.firebaseapp.com",
  databaseURL: "https://blogeek-a21da.firebaseio.com",
  projectId: "blogeek-a21da",
  storageBucket: "blogeek-a21da.appspot.com",
  messagingSenderId: "1073459866330",
  appId: "1:1073459866330:web:4780aa82170bae15"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore(); // NEW
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export const createUserDocument = async (user, additionalData) => {
  // If there is no user, let's not do this.
  if (!user) return;

  // Get a reference to the location in the Firestore where the user
  // document may or may not exist.
  const userRef = firestore.doc(`users/${user.uid}`);

  // Go and fetch a document from that location.
  const snapshot = await userRef.get();

  // If there isn't a document for that user. Let's use information
  // that we got from either Google or our sign up form.
  if (!snapshot.exists) {
    console.log(user);
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user", console.error);
    }
  }

  // Get the document and return it, since that's what we're
  // likely to want to do next.
  return getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore
      .collection("users")
      .doc(uid)
      .get();

    return { uid, ...userDocument.data() };
  } catch (error) {
    console.error("Error fetching user", error.message);
  }
};
export default firebase;
