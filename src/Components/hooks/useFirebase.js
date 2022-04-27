 
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile, getIdToken, signOut  } from "firebase/auth";
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
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('')

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // google sign In
    const signInUsingGoogle = (location, navigate) => { 
    return  signInWithPopup(auth, googleProvider) 
         
            
    } 
    
    // Register new user
    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            setAuthError('');
            const newUser = { email, displayName:name };
            setUser(newUser);
            // save use to the database
            savedUser(email, name, 'POST')
            // send name to save the firebase
            updateProfile(auth.currentUser, {
                displayName:name
              }).then(() => {
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
            navigate('/');
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
            const destination = location?.state?.from || '/dashboard'
            navigate(destination);
            setAuthError('')
        })
        .catch((error) => {
            setAuthError(error.message)
        })
        .finally(() => setIsLoading(false));
    }

    // admin check state
    useEffect(() => {
        fetch(`https://limitless-shore-74822.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    }, [user.email]);

    
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
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })
            }else{
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [auth])
 
    const savedUser = (email, displayName, method) => {
        const user = {email, displayName};
        fetch('https://limitless-shore-74822.herokuapp.com/users', {
            method: method,
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    return{
        user,   
        admin,
        authError,
        token,
        setUser,
        logOut,
        signInUsingGoogle,
        registerUser, 
        loginUser,
        isLoading,
        setIsLoading, 
        savedUser, 
        setAuthError
    }
}

export default useFirebase;