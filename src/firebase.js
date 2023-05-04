import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCX6WuWBrtfCsSMShMP0xJawgZ_2DP4KGI",
  authDomain: "netflix-clone-10f63.firebaseapp.com",
  projectId: "netflix-clone-10f63",
  storageBucket: "netflix-clone-10f63.appspot.com",
  messagingSenderId: "755661346976",
  appId: "1:755661346976:web:63add283a2fce806b551c5"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export { auth };
export default db;
