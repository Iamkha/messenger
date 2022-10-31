import React from 'react';

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          className="imgmessageInfo"
          src="https://i.pinimg.com/736x/08/65/f1/0865f1362bb63020b5a5aa5a9994ee5a.jpg"
          alt=""
        />
        <span className="contentMessageInfo">just now</span>
      </div>
      <div className="messageContent">
        <p className="messageContentUser">Hello</p>
        <img
          className="imgMessageConten"
          src="https://photo-cms-plo.epicdn.me/w850/Uploaded/2022/bivxpcwk/2022_04_11/tham-3-3401.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
