import React from 'react';
import './Login.css';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../context/AuthContex';

const Login = () => {
  const [login, setLogin] = useState({
    userName: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = () => {};
  return (
    <div className='loginBg'>
      <div className='container '>
        <div className='row'>
          <h1 className='text-center'>User Login</h1>
          <div className='col-md-10 col-10'>
            <div className='loginUser'>
              <label htmlFor=''>UserName:</label>
              <input
                type='text'
                placeholder='Enter Your Name'
                id='userName'
                onChange={handleChange}
              />
            </div>
            <div className='loginUser'>
              <label htmlFor=''>Password:</label>
              <input
                type='password'
                placeholder='Enter Your Password'
                id='password'
                onChange={handleChange}
              />
            </div>
            <button>LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
