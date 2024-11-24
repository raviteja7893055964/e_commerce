import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/signup", { name, email, password })
            .then((result) => {
                console.log(result);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f0f2f5" }}>
            <form
                onSubmit={handleSignup}
                style={{
                    width: "100%",
                    maxWidth: "400px",
                    padding: "2rem",
                    borderRadius: "8px",
                    backgroundColor: "#ffffff",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
            >
                <h2 style={{ textAlign: "center", marginBottom: "1.5rem", color: "#333" }}>Sign Up</h2>

                <div style={{ marginBottom: "1rem" }}>
                    <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem", color: "#555" }}>
                        Username
                    </label>
                    <input
                        type="text"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "0.8rem",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                        }}
                    />
                </div>

                <div style={{ marginBottom: "1rem" }}>
                    <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem", color: "#555" }}>
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "0.8rem",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                        }}
                    />
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                    <label htmlFor="password" style={{ display: "block", marginBottom: "0.5rem", color: "#555" }}>
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "0.8rem",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                        }}
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "0.8rem",
                        border: "none",
                        borderRadius: "4px",
                        backgroundColor: "#4caf50",
                        color: "#fff",
                        fontWeight: "bold",
                        cursor: "pointer",
                    }}
                >
                    Submit
                </button>

                <p style={{ marginTop: "1rem", textAlign: "center", color: "#555" }}>
                    Already have an account?{" "}
                    <a href="/login" style={{ color: "#007bff", textDecoration: "none" }}>
                        Login
                    </a>
                </p>
            </form>
        </div>
    );
}

export default SignUp;
