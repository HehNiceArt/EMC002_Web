import React from "react";
import './css/Login.css'
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

import { useNavigate } from "react-router";
export default function Login() {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
    }
    return (
        <div className="Login-Container">
            <div className="Login-Overlay">
                <div className="Login-Content">
                    <div className="Login-Back">
                        <div style={{ padding: '10px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF" onClick={navigateToHome}><path d="M650-80 250-480l400-400 61 61.67L372.67-480 711-141.67 650-80Z" /></svg>
                        </div>
                    </div>
                    {/*<LoginForm />*/}
                    <RegistrationForm />
                </div>
            </div>
        </div>
    )
}