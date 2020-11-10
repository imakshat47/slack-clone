import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSMqlKuTIcHXr79Nik8m_UIKBX6uEEV88",
  authDomain: "slack-clone-98811.firebaseapp.com",
  databaseURL: "https://slack-clone-98811.firebaseio.com",
  projectId: "slack-clone-98811",
  storageBucket: "slack-clone-98811.appspot.com",
  messagingSenderId: "131031816791",
  appId: "1:131031816791:web:d39380a741b0c12e2b2112",
  measurementId: "G-C3E1J6E78M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;