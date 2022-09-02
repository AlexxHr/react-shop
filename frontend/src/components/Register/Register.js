import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";

import AuthContext from "../../context/AuthContext";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const { registerUser, user, errors } = useContext(AuthContext);

    const handleSubmit = async e => {
        e.preventDefault();
        registerUser(username, email, password, password2);
        
    };

    return (
        !user ? 
        <section className="auth">
            <article className="auth-box">
                <form onSubmit={handleSubmit} className="auth-form">
                    <h1 className="auth-text">Register your account</h1>
                    <input
                        type="text"
                        id="username"
                        onChange={e => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                    />
                    {errors.username}
                    <input
                        type="text"
                        id="email"
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    {errors.email}
                    <input
                        type="password"
                        id="password"
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <input
                        type="password"
                        id="confirm-password"
                        onChange={e => setPassword2(e.target.value)}
                        placeholder="Confirm Password"
                        required
                    />
                    {errors.password}
                    <p>{password2 !== password ? "Passwords do not match" : ""}</p>
                    <button className="auth-btn">Register</button>
                </form>
            </article>
        </section>
    : <Navigate to={'/'}/>    
    );
}

export default Register;
