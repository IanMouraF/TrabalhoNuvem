import React from 'react';
import {  signOut } from "firebase/auth";
import {auth} from './firebase';
import { useNavigate } from 'react-router-dom';
import './components/Modal.css';
 
const Logout = () => {
    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }
   
    return(
        <>
            <nav>
                
 
                <div>
        	    <button onClick={handleLogout} className="btn-modal">
                        Logout
                    </button>
        	</div>
            </nav>
        </>
    )
}
 
export default Logout;
