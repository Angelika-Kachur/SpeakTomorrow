import firebase from './firebase';

const config = {
  apiKey: "AIzaSyDgwBLX17zGCYJTdXqBX0_POdQn_Q9_CH4",
  authDomain: "speak-tomorrow-1553165359427.firebaseapp.com",
  databaseURL: "https://speak-tomorrow-1553165359427.firebaseio.com",
  projectId: "speak-tomorrow-1553165359427",
  storageBucket: "speak-tomorrow-1553165359427.appspot.com",
  messagingSenderId: "802530675333"
};

firebase.initializeApp(config)
export default firebase;