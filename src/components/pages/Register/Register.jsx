import React from 'react';
import './Register.css';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../context/AuthContex';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [isRegister, setIsRegister] = useState({
    userName: undefined,
    userEmail: undefined,
    password: undefined,
  });
  const { user, email, loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setIsRegister((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  console.log(isRegister);
  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch({ type: 'USER_REGISTER' });
    try {
      const res = await axios.post('https://tour-booking-server.herokuapp.com/api/auth/register', isRegister);
      dispatch({ type: 'REGISTER_SUCCESS', payload: res.data.details });
      navigate('/login');
    } catch (err) {
      dispatch({ type: 'REGISTER_FAILURE', payload: err.response.data });
    }
  };
  return (
    <div className='registerBg'>
      <div className='container '>
        <div className='row'>
          <div className=' col-8 registerForm'>
            <h2 className='registerHeader'>Please Register</h2>
            <div className='registerInput'>
              <input type='text' placeholder='User Name' id='userName' onChange={handleChange} />
              <br />
              <input type='text' placeholder='User email' id='userEmail' onChange={handleChange} />
              <br />
              <input
                type='password'
                placeholder='User Password'
                id='password'
                onChange={handleChange}
              />
              <br />
              <button disabled={loading} onClick={handleRegister}>
                SIGN IN
              </button>
              <br />
              <Link to='/login' className='loginLink'>
                <p>Already Register? Please Sign In</p>
              </Link>
              <br />
              {error && <span className='registerError'>{error.message}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
