import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img
          className="img-user"
          src="https://truyenhinhthanhhoa.qltns.mediacdn.vn/dataimages/202111/original/images5726399_WHO.jpg"
          alt=""
        />
        <span className="name-user">jhon</span>
        <button onClick={() => signOut(auth)} className="button-logout-user">
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
