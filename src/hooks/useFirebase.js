import { useEffect, useState } from "react"
import initializeAuthentication from '../component/Firebase/firebase.init'
import {getAuth, GoogleAuthProvider, signOut,signInWithPopup ,onAuthStateChanged} from "firebase/auth"

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    const signinUsingGoogle = () => {
        
        return signInWithPopup(auth, googleProvider)
    }
    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        })
        .finally(() => setIsLoading(false))
    }
    // To Check if the user is signed In or not
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, user => {
        if(user){
            setUser(user)
        }
        else{
            setUser({})
        }
        setIsLoading(false)
       }) 
       return unsubscribe;
    }, [auth])
    return {
        user,
        signinUsingGoogle,
        logout,
        isLoading

    }
}
export default useFirebase;