import { auth, googleProvider } from "../components/config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
        <p className="font-montserrat font-semibold text-2xl mb-2">Sign In</p>
      <p className="font-montserrat font-semibold text-2xl mb-2">Email</p>
      <input
        type="email"
        className="font-montserrat font-semibold border-2 border-[#3961AB] m-2 mb-10 p-5 w-full rounded-lg shadow-inner"
        placeholder="hola@example.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className="font-montserrat font-semibold text-2xl mb-2">Password</p>
      <input
        className="font-montserrat font-semibold border-2 border-[#3961AB] m-2 mb-10 p-5 w-full rounded-lg shadow-inner"
        placeholder="Password..."
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <button
        className="font-montserrat font-semibold p-7 m-2 w-full bg-[#3961AB] text-white hover:bg-[#326CC9] transition duration-300 ease-in-out rounded-lg shadow-lg"
        onClick={signIn}
      >
        Sign In
      </button>
      <button
        className="flex items-center justify-center font-montserrat font-semibold p-7 m-2 w-full bg-white text-gray-500 hover:bg-gray-200 transition duration-300 ease-in-out rounded-lg shadow-lg"
        onClick={signInWithGoogle}
      >
        <FcGoogle size={25} className="pr-3" /> Sign In with Google
      </button>
      {/*
            <button className="rounded-none p-2 m-1" onClick={logOut}>Log Out</button>
            */}
    </div>
  );
};
