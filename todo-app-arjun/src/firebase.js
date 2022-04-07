import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB4fYYlragDF5SQTBCHjpMx2SwkfLC9yg8",
  authDomain: "todo-app-arjun.firebaseapp.com",
  databaseURL: "https://todo-app-arjun-default-rtdb.firebaseio.com/",
  projectId: "todo-app-arjun",
  storageBucket: "todo-app-arjun.appspot.com",
  messagingSenderId: "243477779924",
  appId: "1:243477779924:web:12bd6c60f9348bb00af241",
  measurementId: "G-P39NVVD5ZQ",
});

const db = firebaseApp.firestore();

export default db;
