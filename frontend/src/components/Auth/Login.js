import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import './Auth.css'

const Login = () => {
  const { loginUser, user } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault(); 
    username.length > 0 && loginUser(username, password);
  };

  return (
    !user ? 
    <section className="auth">
            <article className="auth-box">
                <form onSubmit={handleSubmit} className="auth-form">
                    <h1 className="auth-text">Login your account</h1>
                    <input
                        type="text"
                        id="username"
                        onChange={e => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <button className="auth-btn">Login</button>
                </form>
            </article>
        </section>
  : <Navigate to={'/'}/>
  );
};

export default Login;
