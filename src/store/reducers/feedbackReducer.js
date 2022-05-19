import {
    SEND_FEEDBACK_REQUEST,
    SEND_FEEDBACK_SUCCESS,
    SEND_FEEDBACK_FAILURE,
    GET_FEEDBACK_REQUEST,
    GET_FEEDBACK_SUCCESS,
    GET_FEEDBACK_FAILURE,
  } from '../constants';
  
  const initialState = {
    data: [],
    items:[],
    isLoading: false,
    error: null
  };
  
  const feedbackReducer = (state = initialState, action) => {
    switch (action.type) {
      case SEND_FEEDBACK_REQUEST:
        return { ...state, isLoading: true, error: null };
      case SEND_FEEDBACK_SUCCESS:
        return { ...state, data: action.payload, isLoading: false, error: null };
      case SEND_FEEDBACK_FAILURE:
        return { ...state, isLoading: false, error: action.payload };
      case GET_FEEDBACK_REQUEST:
        return { ...state, isLoading: true, error: null };
      case GET_FEEDBACK_SUCCESS:
        return { ...state, items: action.payload, isLoading: false, error: null };
      case GET_FEEDBACK_FAILURE:
        return { ...state, isLoading: false, error: action.payload };
      default:
        return state;
    }
  };

  export default feedbackReducer;

  
  