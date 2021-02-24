import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCOKde2V472Cd3LZQ6b1TWd7w8RQV1i0qU",
	authDomain: "crwn-db-2d338.firebaseapp.com",
	projectId: "crwn-db-2d338",
	storageBucket: "crwn-db-2d338.appspot.com",
	messagingSenderId: "1039326854356",
	appId: "1:1039326854356:web:4be23ed2ea3834761f0f41",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
