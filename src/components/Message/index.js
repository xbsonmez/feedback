import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Message.module.css';

const Message = (prop) => {

  const [text, setText] = useState('');

  const { onSend } = prop;
  const onTextChange = (e) =>{
    setText(e);
  };

  const onSendText = () => {
    onSend(text);
  }

  return (
    <div className={s.message}>
         <textarea 
          data-testid="text-area"
          className={s.textAreaModal} 
          maxLength="2000"
          placeholder="Write Your Feedback"
          onChange={(e)=>{onTextChange(e.target.value)}}
         />
          <button 
          aria-label='onSend' 
          className={s.sendBtn} 
          onClick={()=>{onSendText()}}>
            Gönder
          </button>
    </div>
  );
}

Message.propTypes = {
  onSend: PropTypes.func,
};
export default Message;
