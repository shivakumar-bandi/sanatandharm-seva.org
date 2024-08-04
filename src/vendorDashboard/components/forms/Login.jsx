import React, { useState } from 'react';
import './Login.css';
import './base.css';
import './form.css';
import './animations.css';
import './colors.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useUser } from '../../contexts/UserContext';
import { API_URL } from '../../data/apiPath';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useUser();
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const success = await login(email, password);
    if (!success) {
      setError('Login failed. Please check your credentials.');
    } else {
      navigate('/welcome');
    }

    setLoading(false);
  };

  const toggleShowPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <div className='loginSection'>
      <form className='authForm' onSubmit={loginHandler}>
        <h2 className="animated-text">సనాతన ధర్మ్ సేవా సమితి</h2>
        <h3>Login</h3>
        {error && <p className='error'>{error}</p>}
        <label htmlFor="email">Email</label><br />
        <input 
          id="email"
          type="email" 
          name='email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder='Enter your email' 
          required 
        /><br />
        <label htmlFor="password">Password</label><br />
        <div className="passwordField">
          <input 
            id="password"
            className="passwordInput"
            type={showPassword ? "text" : "password"} 
            name='password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder='Enter your password here...' 
            required 
          />
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            onClick={toggleShowPassword}
            className="passwordToggleIcon"
            aria-label={showPassword ? "Hide password" : "Show password"}
          />
        </div>
        <div className="btnSubmit">
          <button type='submit' disabled={loading}>
            {loading ? 'Logging in...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
