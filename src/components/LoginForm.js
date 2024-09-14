import React, { useState } from "react";

import './css/Login.css'
const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onButtonClick = () => {
        // Handle login logic here
        console.log("Email:", email);
        console.log("Password:", password);
    }

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
export default LoginForm