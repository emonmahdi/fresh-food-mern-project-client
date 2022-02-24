 
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication(); 

const useFirebase =() => {
    const [user, setUser] = useState({}); 
    const [authError, setAuthError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true)


    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // google sign In
    const signInUsingGoogle = (location, navigate) => { 
    return  signInWithPopup(auth, googleProvider) 
         
            
    } 
    
    // Register new user
    const registerUser = (email,password) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            setUser(user)
            setAuthError('')
        })
        .catch(error => {
            setUser({})
            setAuthError(error.message)
        })
        .finally(() => setIsLoading(false))
    }
    // login user
    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/'
            navigate(destination);
            setAuthError('')
        })
        .catch((error) => {
            setAuthError(error.message)
        })
        .finally(() => setIsLoading(false));
    }
    // Logout
    const logOut = ()  => {
        setIsLoading(true)
        signOut(auth)
        .then(() => {
            // sign out successfull
            setAuthError('')
        })
        .catch((error) => {
            // error
            setAuthError(error.message)
        })
        .finally(() => setIsLoading(false));
    }

    // Observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [auth])
 
    return{
        user,   
        authError,
        setUser,
        logOut,
        signInUsingGoogle,
        registerUser, 
        loginUser,
        isLoading,
        setIsLoading
    }
}

export default useFirebase;