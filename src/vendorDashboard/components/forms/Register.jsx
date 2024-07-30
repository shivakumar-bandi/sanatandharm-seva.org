
import React, { useState } from 'react';
import './Register.css';
import { API_URL } from '../../data/apiPath';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';



const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/user/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setUserName("");
        setEmail("");
        setPassword("");
        alert("User registration success!");
        navigate('/login');
      } else {
        setError(data.error);
        alert("Registration failed");
      }
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <div className="registerSection">
      <form className="authForm" onSubmit={handleSubmit}>
        
        <h2 className="animated-text">సనాతన ధర్మ్ సేవా సమితి</h2>
        <h3>Register</h3>
        <label>Username</label>
        <input
          type="text"
          name="userName"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter your name"
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <label>Password</label>
        <div className="passwordField">
          <input
            className="passwordInput"
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            onClick={toggleShowPassword}
            className="passwordToggleIcon"
          />
        </div>
        <div className="btnSubmit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Register;