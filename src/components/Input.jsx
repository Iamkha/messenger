import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faImage, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Input = () => {
  return (
    <div className="input">
      <input className="InputFile" type={'text'} placeholder="Type something..."></input>
      <div className="send">
        <FontAwesomeIcon icon={faPaperclip} className="iconsSend" />
        <input className="" type={'file'} style={{ display: 'none' }} id="file" />
        <label htmlFor="file">
          <FontAwesomeIcon icon={faImage} className="iconsSend" />
        </label>
        <button className="buttonSend">
          <FontAwesomeIcon icon={faPaperPlane} className="iconsSend" />
        </button>
      </div>
    </div>
  );
};
export default Input;
