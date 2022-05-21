import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import {CloseOutlined } from '@ant-design/icons';
import s from './Modal.module.css';

if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#root');

const Modal = (props) => {
    const {children, isOpen, onClose, title, type} = props;

    return (
      <div data-testid="modal">
        <ReactModal
        isOpen={ isOpen }
        onRequestClose={ onClose }
        contentLabel="Modal"
        ariaHideApp={false}
        className={type ==='error' ? s.modalError : s.modal}
      >
       <button aria-label='close' className={s.closeBtn} onClick={ onClose } > <CloseOutlined /> </button>
        <div className={s.children}>
          <div data-testid="title" className={s.title}>
              {title}
          </div>
          { children }
        </div>
      </ReactModal>
      </div>
    );
  }
  
  Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.node,
    title: PropTypes.string,
    type: PropTypes.string,
  };
  
  export default Modal;
  

