import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCamera,
  faUserPlus,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import Messages from './Messages';
import Input from './Input';

function chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span className="nameChatInfo">jhon</span>
        <div className="chatIcons">
          <FontAwesomeIcon icon={faCamera} className="iconsChat" />
          <FontAwesomeIcon icon={faUserPlus} className="iconsChat" />
          <FontAwesomeIcon icon={faEllipsisVertical} className="iconsChat" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default chat;
