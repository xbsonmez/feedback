import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getFeedBacks
  } from '../../store/actions';

import s from './FeedbackList.module.css';


const FeedbackList = () => {

    const dispatch = useDispatch();
    const feeds = useSelector(state => state.feedback.items);

    useEffect(() => {
        dispatch(getFeedBacks());
      }, []);
    
    return (
        <div>
            <h1> LIST </h1>
            {feeds.length > 0 ?
            <div className={s.list} key={'FeedList'}>
                <table key={'table'}>
                <thead>
                  <tr key={'header'}>
                    {Object.keys(feeds[0]).map((key, index) => (
                      <th key={index}>{key}</th>
                    ))}
                  </tr>
                  {feeds.map((item, index) => (
                    <tr key={index}>
                      {Object.values(item).map((val, index) => (
                        <td key={index}>{val}</td>
                      ))}
                    </tr>
                  ))}
                  </thead>
                </table>
            </div>
            : 'LİSTE BOŞ'
            }
        </div>
    );
};


export default FeedbackList;
