import thunk from "redux-thunk" ;
import { applyMiddleware, createStore } from 'redux';
import appReducer from '../src/store/reducers';


export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    return createStoreWithMiddleware(appReducer, initialState);
};