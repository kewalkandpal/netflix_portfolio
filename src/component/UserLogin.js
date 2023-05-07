import {React,useRef} from "react";
import "./UserLogin.css";
import auth  from "../firebase/firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
function UserLogin(){
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    function handelRegister(e){
        e.preventDefault(); 
        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((userCredential)=>{
            console.log(userCredential.user);
        }).catch((error)=>{
           alert(error.message);
        })
        emailRef.current.value = null;
        passwordRef.current.value = null;
    }
    function handelSignIN(e){
        e.preventDefault();
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((userCredential)=>{
            console.log(userCredential.user);
        }).catch((error)=>{
            alert(error.message);
        })
        emailRef.current.value = null;
        passwordRef.current.value = null;
    }
    return(
        <div className="user_login">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email" ref={emailRef} />
                <input type="password" placeholder="Password" ref={passwordRef} />
                <button type="submit" onClick={handelSignIN}>Sign In</button>
                <h4>New to Netflix? <span onClick={handelRegister}>Sign Up now.</span></h4>
            </form>
        </div>
    )
};

export default UserLogin;