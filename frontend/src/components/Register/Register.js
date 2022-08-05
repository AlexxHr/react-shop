import { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const { registerUser } = useContext(AuthContext);

    const handleSubmit = async e => {
        e.preventDefault();
        registerUser(username, email, password, password2);
    };
    
    return (
        <section className="register">
            <article className="register-box">
                <form onSubmit={handleSubmit} className="register-form">
                    <h1 className="register-text">Register your account</h1>
                    <input
                        type="text"
                        id="username"
                        onChange={e => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                    />
                    <input
                        type="text"
                        id="email"
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
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
                    <p>{password2 !== password ? "Passwords do not match" : ""}</p>
                    <button className="register-btn">Register</button>
                </form>
            </article>
        </section>
    );
}

export default Register;
