import firebase from "firebase/compat/app";

import "firebase/compat/auth";

import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQt2NdNO0udQQhuYxt_x7tBPef1RNbblE",
  authDomain: "twitter-clone-5292f.firebaseapp.com",
  projectId: "twitter-clone-5292f",
  storageBucket: "twitter-clone-5292f.appspot.com",
  messagingSenderId: "75902734715",
  appId: "1:75902734715:web:8ecdba2c8bc68b93b1adde",
};

firebase.initializeApp(firebaseConfig);

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(githubProvider)
    .then((user) => {
      const { additionalUserInfo } = user;
      const { username, profile } = additionalUserInfo;
      const { avatar_url, blog } = profile;
      return {
        avatar: avatar_url,
        username,
        url: blog,
      };
    });
};
