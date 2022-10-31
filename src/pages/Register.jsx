import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSunmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, 'userChats', res.user.uid), {});
            navigate('/');
          });
        }
      );
    } catch (err) {
      setErr(true);
      // setLoading(false);
    }
  };
  return (
    <div className="register">
      <div className="formWrapper">
        <h1 className="logo">Lama Chat</h1>
        <span className="title">Register</span>
        <form onSubmit={handleSunmit}>
          <input
            className="inputRegister"
            type={'text'}
            placeholder="Display name"
          ></input>
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
          {err && <span>Something went wrong</span>}
        </form>
        <span className="note">
          You do have an account? <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
};
export default Register;
