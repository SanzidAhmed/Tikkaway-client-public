import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInGoogle = (provider) => {
        return signInWithPopup(auth,provider);
    }
    const signInGithub = (provider) => {
        return signInWithPopup(auth,provider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    // observer user auth state
    useEffect(() => {
      const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        // stop observing while unmounting
        return () => {
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        signInGoogle,
        signInGithub
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;