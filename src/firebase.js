
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBgUEoOk2zeoFxaU7-5y1LAqrH0bq30oDw",
  authDomain: "disneyplusapp-87ba4.firebaseapp.com",
  projectId: "disneyplusapp-87ba4",
  storageBucket: "disneyplusapp-87ba4.appspot.com",
  messagingSenderId: "279514037972",
  appId: "1:279514037972:web:678e828f2f9442445ac541"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export{auth, provider, storage };
  export default db;



