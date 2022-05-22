import axios from 'axios';
import {
    SEND_FEEDBACK_REQUEST,
    SEND_FEEDBACK_SUCCESS,
    SEND_FEEDBACK_FAILURE,
    GET_FEEDBACK_REQUEST,
    GET_FEEDBACK_SUCCESS,
    GET_FEEDBACK_FAILURE,
  } from '../constants';

import errorMessage from './errorMessage';

import { openModal } from './modalActions';
  import { FEEDBACK_FAILURE_MODAL, FEEDBACK_SUCCES_MODAL } from '../constants';

const URL = 'https://feedbackybe.herokuapp.com/feedbacks';

export const sendFeedBacks = (text) => async dispatch => {
  try {
    dispatch({
      type: SEND_FEEDBACK_REQUEST
    });

    const requestData = 
    {
        "feedbacks": text
    };

    const res = await axios.post(URL, requestData
    );

    dispatch({
      type: SEND_FEEDBACK_SUCCESS,
      payload: res.data
    });

    dispatch(openModal(FEEDBACK_SUCCES_MODAL));

  } catch (e) {
    dispatch({
      type: SEND_FEEDBACK_FAILURE,
      payload: errorMessage
    });
    dispatch(openModal(FEEDBACK_FAILURE_MODAL));
  }
};


export const getFeedbacks = () => async dispatch => {
    try {
      dispatch({
        type: GET_FEEDBACK_REQUEST
      });

      const res = await axios.get(URL);
  
      dispatch({
        type: GET_FEEDBACK_SUCCESS,
        payload: res.data
      });
  
    } catch (e) {
      dispatch({
        type: GET_FEEDBACK_FAILURE,
        payload: errorMessage
      });
    }
  };