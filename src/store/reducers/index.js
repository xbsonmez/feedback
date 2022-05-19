import { combineReducers } from 'redux';

// Reducers
import feedbackReducer from './feedbackReducer';
import modalReducer from './modalReducer';


const appReducer = combineReducers({
    feedback: feedbackReducer,
    modalData: modalReducer
  });
  
export default appReducer;
  