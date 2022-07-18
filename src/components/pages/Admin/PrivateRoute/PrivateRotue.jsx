import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContex';

const PrivateRotue = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to='/register' />;
  } else {
    return children;
  }

  
};

export default PrivateRotue;
