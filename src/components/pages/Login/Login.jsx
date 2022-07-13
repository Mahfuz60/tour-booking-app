import React from 'react';
import './Login.css';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../context/AuthContex';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState({
    userName: undefined,
    password: undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setIsLogin((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: 'USER_LOGIN' });
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', isLogin);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
      navigate('/');
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
    }
  };
  return (
    <div className='loginBg'>
      <div className='container '>
        <div className='row'>
          <div className=' col-8 loginForm'>
            <h2 className='loginHeader'>Please Login</h2>
            <div className='loginInput'>
              <input type='text' placeholder='User Name' id='userName' onChange={handleChange} />
              <br />
              <input
                type='password'
                placeholder='User Password'
                id='password'
                onChange={handleChange}
              />
              <br />
              <button disabled={loading} onClick={handleLogin}>
                LOGIN
              </button>
              <br />
              {error && <span className='loginError'>{error.message}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
