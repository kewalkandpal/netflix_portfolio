import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCorx29TCssjzwflNN1iJvA-4csJz0u5t0",
    authDomain: "netflixclone-3b77d.firebaseapp.com",
    projectId: "netflixclone-3b77d",
    storageBucket: "netflixclone-3b77d.appspot.com",
    messagingSenderId: "1064717845572",
    appId: "1:1064717845572:web:8024e87de2db82a3572811"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export default auth;