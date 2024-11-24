import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();


        axios.post("http://localhost:5000/logout", { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "success") {
                    navigate('/');
                } else if (result.data === "password is incrrect") {
                    document.getElementById("inc_pas").style = "display: block";
                    console.log(result.data.config.data);

                    // navigate('/signup');
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5'
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '300px'
    };

    const inputStyle = {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '14px'
    };

    const buttonStyle = {
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer'
    };

    return (
        <div style={containerStyle}>
            <form onSubmit={handleLogin} style={formStyle}>
                <h2 style={{ textAlign: "center" }}>Logout</h2>
                <h3 id="inc_pas" style={{ display: "none" }}>Enter correct password to logout</h3>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>Submit</button>
                <p style={{ marginTop: "1rem", textAlign: "center", color: "#555" }}>
                    <span>New user? signUp!!!   <br /></span>
                    <a href="/signup" style={{ color: "#007bff", textDecoration: "none" }}>
                        SignUp
                    </a>
                </p>
            </form>
        </div>
    );
};

export default Logout;
