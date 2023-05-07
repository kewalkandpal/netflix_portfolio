import React, { useState,useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(){
    const [navBg, setNavBg] = useState(false);
    function navHideShow(){
        if(window.scrollY > 100){
            setNavBg(true);
        }else{
            setNavBg(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",navHideShow);
        return ()=>{
            window.removeEventListener("scroll",navHideShow);
        }
    })
    return(
        <div className={`nav ${navBg && "nav_bg"}`}>
            <div className="nav_content">
                <Link to="/"><img className="nav_logo" src="https://www.abacustechnologies.com/wp-content/uploads/2020/05/580b57fcd9996e24bc43c529.png" alt="" /></Link>
                <Link to="/profile"><img className="user_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" /></Link>
            </div>
        </div>
    )
};

export default Navbar;