import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const getMiddleware = () => {
  // eslint-disable-next-line no-undef
  if (process.env.NODE_ENV === 'development') {
    return applyMiddleware(thunk, createLogger());
  }
  return applyMiddleware(thunk);
};

export default createStore(rootReducer, getMiddleware());
