import React, {createContext, useContext, useEffect, useState} from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../config/firebase';
import { current } from '@reduxjs/toolkit';

const userAuthContext = createContext();

export function Authentication({ children }) {
    const [user, setUser] = useState({});

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut(){
        return signOut(auth)
    }

    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log("Auth", currentUser)
            setUser(currentUser)
        })

        return () => {
            unsubcribe()
        }
    }, [])

    return (
        <userAuthContext.Provider value={{user, logIn, logOut, signUp}}>
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth(){
    return useContext(userAuthContext)
}