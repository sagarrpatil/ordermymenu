import firebase from 'firebase';
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
  if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  }
  const storage = firebase.storage();
  export  {
    storage, firebase as default
  }
  export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();