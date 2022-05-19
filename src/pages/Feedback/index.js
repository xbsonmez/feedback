import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../components/Modal';
import Message from '../../components/Message';
import {
  sendFeedBacks,
  closeModal,
} from '../../store/actions';
import {FEEDBACK_MODAL,
    FEEDBACK_SUCCES_MODAL,
    FEEDBACK_FAILURE_MODAL
} from '../../store/constants';

import s from './Feedback.module.css';

const Feedback = () => {

 const dispatch = useDispatch();
 const modalData = useSelector(state => state.modalData);

  const isModalOpen = modalNameRequest => {
    const { modalNames } = modalData;
    return modalNames.some(modalName => modalName === modalNameRequest);
  };

  const onSendFeedback = (text) => {
      debugger;
    dispatch(sendFeedBacks(text));
    closeStatusModal();
  };

  const [showModal, setShowModal] = useState(false);
  const [showSuccesModal, setShowSuccesModal] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);

  const closeStatusModal = () => {
    setShowModal(false);
    dispatch(closeModal(FEEDBACK_MODAL));
  };

  const closeSuccesModal = () => {
    setShowSuccesModal(false);
    dispatch(closeModal(FEEDBACK_SUCCES_MODAL));
  };

  const closeFailureModal = () => {
    setShowFailureModal(false);
    dispatch(closeModal(FEEDBACK_FAILURE_MODAL));
  };
  

  useEffect(() => {
    if (isModalOpen(FEEDBACK_MODAL)) {
        setShowModal(true);
    }
    if (isModalOpen(FEEDBACK_SUCCES_MODAL)) {
        setShowSuccesModal(true);
    }
    if (isModalOpen(FEEDBACK_FAILURE_MODAL)) {
        setShowFailureModal(true);
    }
  }, [modalData]);



  return (
      <div>
          <div>
          <Modal
            isOpen= { showModal }
            onClose = {closeStatusModal}
            title= "SEND YOUR FEEDBACK"
            >
              <Message 
              onSend={(e)=>onSendFeedback(e)}/>
            </Modal>
          </div>
        
          <div>
          <Modal
            isOpen= { showSuccesModal }
            onClose = {closeSuccesModal}
            >
            <div className={s.staticText}>
            {'WE HAVE GOT YOUR FEED BACK'}
            </div>
            </Modal>
          </div>

          <div>
          <Modal
            isOpen= { showFailureModal }
            onClose = {closeFailureModal}
            title= "Başarısız"
            type='error'
            >
                {'Something went wrong...'}
            </Modal>
          </div>
      
      </div>
  );
};

export default Feedback;
