import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { auth } from '../firebase';

const Login = () => {
  const [err, setErr] = useState(false);
  const handleSunmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      Navigate('/login');
    } catch (err) {
      setErr(true);
      // setLoading(false);
    }
  };
  return (
    <div className="register" onSubmit={handleSunmit}>
      <div className="formWrapper">
        <h1 className="logo">Lama Chat</h1>
        <span className="title">Login</span>
        <form>
          <input
            className="inputRegister"
            type={'email'}
            placeholder="Email"
          ></input>
          <input
            className="inputRegister"
            type={'password'}
            placeholder="Password"
          ></input>

          <button className="buttonRegister">Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
        <span className="note">
          You do have an account? <Link to="/Register">Regiter</Link>
        </span>
        {/* <link to="">Login</link> */}
      </div>
    </div>
  );
};
export default Login;
