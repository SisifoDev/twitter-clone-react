import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBQt2NdNO0udQQhuYxt_x7tBPef1RNbblE",
  authDomain: "twitter-clone-5292f.firebaseapp.com",
  projectId: "twitter-clone-5292f",
  storageBucket: "twitter-clone-5292f.appspot.com",
  messagingSenderId: "75902734715",
  appId: "1:75902734715:web:8ecdba2c8bc68b93b1adde",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL } = user;

  return {
    avatar: photoURL,
    username: displayName,
    email,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = mapUserFromFirebaseAuthToUser(user);
    onChange(normalizedUser);
  });
};

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(githubProvider);
};
