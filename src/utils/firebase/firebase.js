import { initializeApp } from 'firebase/app';

import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut, onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket:process.env.storageBucket,
    messagingSenderId:process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId,
};
  

console.log(firebaseConfig)

//Intialize firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp)


const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt:'select_account',
});

export const signInGooglePopup = () => 
    signInGooglePopup(auth, googleProvider);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password ) return;

    return await createUserWithEmailAndPassword(auth, email, password)
};

export const singInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async() => await signOut(auth);

export const onAuthStateChangedListener = ( callback ) =>
    onAuthStateChanged(auth, callback);


    