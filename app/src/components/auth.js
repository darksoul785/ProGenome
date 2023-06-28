import { auth, googleProvider } from '../components/config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import { useState } from 'react';

export const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = async() => {
        try{
        await createUserWithEmailAndPassword(auth, email, password);
        } catch(err) {
            console.error(err);
        }
    };
    const signInWithGoogle = async() => {
        try{
        await signInWithPopup(auth, googleProvider);
        } catch(err) {
            console.error(err);
        }
    };
    const logOut = async() => {
        try{
        await signOut(auth);
        } catch(err) {
            console.error(err);
        }
    };

    return (
        <div>
            <input className="font-montserrat font-semibold border-2 border-sky-500 m-2 p-1" placeholder="Email..." 
            onChange={(e) => setEmail(e.target.value)}/>
            <input className="font-montserrat font-semibold border-2 border-sky-500 m-2 p-1" placeholder="Password..."
            type='password'
            onChange={(e) => setPassword(e.target.value)}/>
            <button className="font-montserrat font-semibold rounded-none p-2 m-1" onClick={signIn}>Sign In</button>

            <button className="font-montserrat font-semibold rounded-none p-2 m-1" onClick={signInWithGoogle}>Sign In With Google</button>
            {/*
            <button className="rounded-none p-2 m-1" onClick={logOut}>Log Out</button>
            */}
        </div>
    );
}; 