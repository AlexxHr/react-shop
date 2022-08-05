import { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault(); 
    username.length > 0 && loginUser(username, password);
  };

  return (
    
    <section className="register">
            <article className="register-box">
                <form onSubmit={handleSubmit} className="register-form">
                    <h1 className="register-text">Login your account</h1>
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
                    <button className="register-btn">Login</button>
                </form>
            </article>
        </section>
  );
};

export default Login;
