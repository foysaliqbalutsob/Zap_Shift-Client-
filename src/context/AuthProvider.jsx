import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { CgPassword } from "react-icons/cg";


  const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    // ২. প্রোফাইল আপডেট করার ফাংশনটি লিখুন
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo
        });
    }


    const registerUser =(email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password )
    }

    const signInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
 
    const signInGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth , googleProvider)

    };

    const verifyEmail = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
};

    const logOut = ()=>{
        setLoading(true)
        return  signOut(auth) 

    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log("console from unSubscribe", currentUser)
            setUser(currentUser);
            setLoading(false)

        })
        return ()=>{
            unSubscribe();
        }
        
    },[])

  




    const authInfo ={
        registerUser,
        signInUser,
        signInGoogle,
        loading,
        user,
        logOut,
        updateUserProfile,
        verifyEmail,



    }


  return <AuthContext value={authInfo}>

    {
        children
    }
  </AuthContext>;
};

export default AuthProvider;
