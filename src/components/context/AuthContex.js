import { createContext, useEffect, useReducer } from 'react';

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  // email: JSON.parse(localStorage.getItem('email')) || null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case 'USER_REGISTER':
      return {
        user: null,
        email: null,
        loading: true,
        error: null,
      };
    case 'REGISTER_SUCCESS':
      return {
        user: action.payload,
        email: action.payload,
        loading: false,
        error: null,
      };

    case 'REGISTER_FAILURE':
      return {
        user: null,
        email: null,
        loading: false,
        error: action.payload,
      };
    case 'USER_LOGIN':
      return {
        user: null,
        loading: true,
        error: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);
  useEffect(() => {
    localStorage.setItem('email', JSON.stringify(state.email));
  }, [state.email]);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        email: state.email,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
