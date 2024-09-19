import React, { useState } from "react";
import './css/Login.css'

const RegistrationForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onButtonClick = () => {
        console.log("Email: ", email);
        console.log("firstName: ", firstName);
        console.log("lastName: ", lastName);
        console.log("password: ", password);
        console.log("confirmPass: ", confirmPassword);
    }
    return (
        <div className="Login-Form">
            <div className="Login-SignUpContainer">
                <h1>Sign Up/Register</h1>
                <div className="Login-Email">
                    <p>Email Address</p>
                    <input
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
                        <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Ex. Doe"
                            className="inputBox" />
                    </div>
                </div>
                <div className="Login-Pass">
                    <div className="Login-Password">
                        <p>Password</p>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="inputBox" />
                    </div>
                    <div className="Login-ConfirmPassword">
                        <p>Confirm Password</p>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="inputBox" />
                    </div>

                </div>
                <button onClick={onButtonClick} className="loginButton">Register</button>
            </div>
        </div>
    )
}
export default RegistrationForm