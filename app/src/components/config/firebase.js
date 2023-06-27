import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzSfex2hC1lLOnvifMBpn9I8OU6jGWbd4",
  authDomain: "progenome-login.firebaseapp.com",
  projectId: "progenome-login",
  storageBucket: "progenome-login.appspot.com",
  messagingSenderId: "963279993425",
  appId: "1:963279993425:web:047a878f40e52662425670",
  measurementId: "G-YMFFEN5KVW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);