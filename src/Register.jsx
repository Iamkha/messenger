import React from 'react';

const Register = () => {
  return (
    <div className="register">
      <div className="formWrapper">
        <h1 className="logo">Lama Chat</h1>
        <span className="title">Register</span>
        <form>
          <input
            className="inputRegister"
            type={'text'}
            placeholder="Display name"
          ></input>
          <input className="inputRegister" type={'email'} placeholder="Email"></input>
          <input
            className="inputRegister"
            type={'password'}
            placeholder="Password"
          ></input>
          <input
            style={{ display: 'none' }}
            type={'file'}
            placeholder=""
            className="inputRegisterinputRegister"
            id="file"
          ></input>
          <label htmlFor="file" className="lableAvata">
            <img
              className="imgAvata"
              src="https://hoigicungbiet.com/wp-content/uploads/2018/09/Add-l%C3%A0-g%C3%AC-M%E1%BB%99t-s%E1%BB%91-c%E1%BB%A5m-t%E1%BB%AB-ph%E1%BB%95-bi%E1%BA%BFn-v%E1%BB%9Bi-%E2%80%9CAdd%E2%80%9D.png"
              alt=""
            />
            <span>Add an avata</span>
          </label>
          <button className="buttonRegister">Sign up</button>
        </form>
        <span className="note">You do have an account? Login</span>
        {/* <link to="">Login</link> */}
      </div>
    </div>
  );
};
export default Register;
