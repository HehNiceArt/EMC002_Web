import React, { useState } from "react";
import './css/Login.css'
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const onButtonClick = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                login(data.user);
                alert(data.message);
                navigate('/');
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("Login failed. Please try again.");
        }
    };

    return (
        <div className="Login-Form">
            <div className="Login-FormContainer">
                <h1>Login</h1>
                <div className="Login-Email">
                    <p>Email Address</p>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="inputBox"
                    />
                </div>
                <div className="Login-Password">
                    <p>Password</p>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="inputBox"
                    />
                </div>
                <button onClick={onButtonClick} className="loginButton">Login</button>
            </div>
        </div>
    )
}
export default LoginForm;