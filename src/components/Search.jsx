import React from 'react';

const Search = () => {
  return (
    <div className="search">
      <div className="searchFrom">
        <input className="searchInput" type={'text'} placeholder="Find a user"></input>
      </div>
      <div className="userChat">
        <img
          className="imgChat"
          src="https://static.bongda24h.vn/medias/standard/2020/7/28/Anh-CR7_-3.jpg"
          alt=""
        ></img>
        <div className="">
          <span className="nameChat">cr7</span>
          <p className="chatUserName">hello Viet Nam</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
