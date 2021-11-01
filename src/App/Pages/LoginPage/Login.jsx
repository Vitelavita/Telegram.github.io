import React from 'react'
import { useDispatch } from 'react-redux';
import './StyleLogin.css'
import firebase from '../../Firebase/Firebase'
import { userSignIn } from '../../Redux/Auth/AuthAction';

export default function Login() {

    const dispatch = useDispatch();

    const signIn = (selectedProvider) => {
        socialLogin(selectedProvider);
    };
     const socialLogin = async (selectedProvider) => {

        let provider;
    
        const auth = firebase.auth();
        if (selectedProvider === "facebook") {
            provider = new firebase.auth.FacebookAuthProvider();
        }
        if (selectedProvider === "google") {
            provider = new firebase.auth.GoogleAuthProvider();
        }
        try {
            const result = await auth.signInWithPopup(provider);
            console.log(result.user);
            dispatch(userSignIn(result.user));
        } catch (error) {
            console.log(error);
        }
    };
    

   
    return (
        <div className='login'>
            <img src={img} alt=' Logo' />
            <button onClick ={()=>signIn('google')}>Login to Vite-legram</button>
        </div>
    )
}

const img ='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.fbcd.co%2Fproducts%2Foriginal%2F53f47d68e53f7d439d78ef4565fbe209afb23cd509bf3275dc1cbad4efebb224.jpg&f=1&nofb=1'


