import { initializeApp } from 'firebase/app';

import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
} from 'firebase/auth';

import { 
  getFirestore,
  doc, 
  getDoc,
  setDoc,
 } from 'firebase/firestore';

 const firebaseConfig = {
    apiKey: "AIzaSyAXdk7FR6RcEpyJE-6UudSXNICJPduHiho",
    authDomain: "netflix-clone-e3bf4.firebaseapp.com",
    projectId: "netflix-clone-e3bf4",
    storageBucket: "netflix-clone-e3bf4.appspot.com",
    messagingSenderId: "801342406602",
    appId: "1:801342406602:web:e43f27b5829da57b8a5933",
    measurementId: "G-YMY127F9HP"
  };


//Intialize firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp)



export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
    ) => {
    if (!userAuth) return;
    
    const userDocRef = doc(db, 'users', userAuth.uid);
    
    const userSnapshot = await getDoc(userDocRef);
    
    if (!userSnapshot.exists()) {
        const { name , email } = userAuth;
        const createdAt = new Date();
    
        try {
        await setDoc(userDocRef, {
            name,
            email,
            createdAt,
            ...additionalInformation,
        });
        } catch (error) {
        console.log('error creating the user', error.message);
        }
    }
    
    return userDocRef;
};



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


