import React, { useState } from "react";
import './Login.css';
import UserLogin from "./UserLogin";

function Login(){
    const [login,setLogin] = useState(false);
    return(
        <div className="login">
            <div className="login_nav">
                <img className="login_logo" src="https://www.abacustechnologies.com/wp-content/uploads/2020/05/580b57fcd9996e24bc43c529.png" alt="logo_image"/>
                <button className="login_btn" onClick={()=>setLogin(true)}>Sign In</button>
                <div className="login_bg_effect" />
            </div>
            {
                login ? (
                    <UserLogin />
                ):(
            <div className="login_contains">
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anywere, Cancel at any time.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className="login_inputs">
                    <form>
                        <input type="email" placeholder="Email Address" />
                        <button className="login_int_btn" onClick={()=>setLogin(true)}>GET STARTED</button>
                    </form>
                </div>
            </div>
                )
            }
        </div>
    )
};

export default Login;