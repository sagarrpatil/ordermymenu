import { initializeApp } from '@firebase/app';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "@firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyD3KH-CmfDqRNwcQUg_MFYV94LpRFONYj8",
  authDomain: "ordermymenus.firebaseapp.com",
  projectId: "ordermymenus",
  storageBucket: "ordermymenus.appspot.com",
  messagingSenderId: "6381596267",
  appId: "1:6381596267:web:43c482ac62a3b0082fcb2e",
  measurementId: "G-25HVTR5K0P"
  };
  // Initialize Firebase
  
  // if (!firebase.apps.length) {
    const app =  initializeApp(firebaseConfig);

  // }
  // const storage = firebase.storage();
  export  {
    // storage, 
    app as default
  }
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// export const googleProvider = signInWithRedirect(auth, provider);
