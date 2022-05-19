import React from 'react';
import { useDispatch } from 'react-redux';
import {EditOutlined } from '@ant-design/icons';
import { openModal } from './store/actions';
import {FEEDBACK_MODAL} from './store/constants';
import './App.css';
import Feedback from './pages/Feedback';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import FeedbackList from './pages/FeedbackList';

const App =() => {
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
           <div className='feedbackContainer'>
            <button onClick={(e)=> dispatch(openModal(FEEDBACK_MODAL)) } className='feedbackBtn'>
            <EditOutlined />
            </button>
            <Feedback />
          </div>
          </Route>
          <Route exact path="/list">
            <FeedbackList />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
