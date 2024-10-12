import React, { useState } from "react";
import './css/Login.css'
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const RegistrationForm = ({ setIsRegistered }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const onButtonClick = async () => {
        if (!email || !firstName || !lastName || !password || !confirmPassword) {
            alert("Please fill in all required fields.");
            return;
        }
        if (confirmPassword !== password) {
            alert("Password is incorrect!");
            return;
        }
        try {
            const response = await fetch('http://localhost:3001/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, firstName, lastName }),
            });
            const data = await response.json();
            if (response.ok) {
                login(data.user);
                alert(data.message);
                setIsRegistered(true);
                navigate('/Login');
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error during registration:", error);
            alert("Registration failed. Please try again.");
        }
    }
    return (
        <div className="Login-Form">
            <div className="Login-SignUpContainer">
                <h1>Sign Up/Register</h1>
                <div className="Login-Email">
                    <p>Email Address</p>
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="inputBox" />
                </div>
                <div className="Login-Name">
                    <div className="Login-FirstName">
                        <p>First Name</p>
                        <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Ex. John"
                            className="inputBox" />
                    </div>
                    <div style={{ width: '20%' }}></div>
                    <div className="Login-LastName">
                        <p>Last Name</p>
                        <input required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Ex. Doe"
                            className="inputBox" />
                    </div>
                </div>
                <div className="Login-Password">
                    <p>Password</p>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="inputBox" />
                    <p>Confirm Password</p>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="inputBox" />

                </div>
                <button onClick={onButtonClick} className="loginButton">Register</button>
            </div>
        </div>
    )
}
export default RegistrationForm