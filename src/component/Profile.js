import Navbar from "./Navbar";
import "./Profile.css";
import  auth  from "../firebase/firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Profile(){
    const navigate = useNavigate();
  const userActive = useSelector((user) => user.userStore.user);
    function handelSignOut(){
        auth.signOut();
        navigate("/");
    }
    return(
        <div className="profile">
            <Navbar />
            <div className="edit_profile">
                <div className="left_section">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="profile_img" />
                </div>
                <div className="right_section">
                    <div className="user_email">
                        <p>{userActive.user}</p>
                    </div>
                    <button className="profile_logout" onClick={handelSignOut}>Sign out</button>
                </div>
            </div>
        </div>
    )
}

export default Profile;