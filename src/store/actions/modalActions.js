import { OPEN_MODAL, CLOSE_MODAL } from '../constants';

export const openModal = (modalName, props) => {
  return {
    type: OPEN_MODAL,
    payload: modalName,
    props: props
  };
};

export const closeModal = (modalName, props) => {
  return {
    type: CLOSE_MODAL,
    payload: modalName,
    props: props
  };
};
