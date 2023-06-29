import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import "firebase/auth";
import React, { Component, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzSfex2hC1lLOnvifMBpn9I8OU6jGWbd4",
  authDomain: "progenome-login.firebaseapp.com",
  projectId: "progenome-login",
  storageBucket: "progenome-login.appspot.com",
  messagingSenderId: "963279993425",
  appId: "1:963279993425:web:047a878f40e52662425670",
  measurementId: "G-YMFFEN5KVW",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function Fire () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // console.log('Login successful!');
      // Redirect or perform additional actions after successful login
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
  }

export default Fire;