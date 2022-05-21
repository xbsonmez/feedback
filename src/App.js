import React from 'react';
import { useDispatch } from 'react-redux';
import {EditOutlined } from '@ant-design/icons';
import { openModal } from './store/actions';
import {FEEDBACK_MODAL} from './store/constants';
import './App.css';
import Feedback from './pages/Feedback';

const App =() => {
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <div className='feedbackContainer'>
        <button onClick={(e)=> dispatch(openModal(FEEDBACK_MODAL)) } className='feedbackBtn'>
         <EditOutlined />
        </button>
          <Feedback />
      </div>
    </div>
  );
}

export default App;
