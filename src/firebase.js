import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1uRhcjzZ45FDkoHmA2TqLAfcrr9-4mpA",
  authDomain: "tienda-1eebe.firebaseapp.com",
  projectId: "tienda-1eebe",
  storageBucket: "tienda-1eebe.appspot.com",
  messagingSenderId: "560574454731",
  appId: "1:560574454731:web:457c527491593ba0af744e"
};
// Initialize Firebase
app.initializeApp(firebaseConfig);

const auth = app.auth()
const db = app.firestore()
const storage = app.storage()

export { db, app, auth, storage }