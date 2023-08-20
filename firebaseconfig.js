import {
    initializeApp,
} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";


import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

import {
    doc,
    setDoc,
    getFirestore, collection,
    addDoc,
    query,
    where,
    getDocs,
    getDoc,
    deleteDoc,
    updateDoc,
    serverTimestamp,
    onSnapshot,
    orderBy,
} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";

import {
    ref,
    uploadBytesResumable,
    getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyC6WJ1yNrxivCpxRe5IcF0VS_X3yMj0H2A",
    authDomain: "minihackathon-901b0.firebaseapp.com",
    projectId: "minihackathon-901b0",
    storageBucket: "minihackathon-901b0.appspot.com",
    messagingSenderId: "108250529122",
    appId: "1:108250529122:web:a3538d0c48885be67a003b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const storage = getStorage(app)



export{
    auth,
    app,
    db,
    getFirestore,
    collection,
    addDoc,
    setDoc,
    doc,
    getDoc,
    getAuth,
    createUserWithEmailAndPassword,
    query,
    where,
    getDocs,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    deleteDoc,
    updateDoc,
    serverTimestamp,
    onSnapshot,
    orderBy,
};