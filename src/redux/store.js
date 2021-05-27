/* eslint-disable object-curly-newline */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { appReducer } from './reducers';
import {
  loggerMiddleware,
  validationMiddleware,
  autoLoginMiddleware,
} from './middleware';

const middleware = [
  loggerMiddleware,
  validationMiddleware,
  autoLoginMiddleware,
  thunk,
];

const rootStore = createStore(appReducer, applyMiddleware(...middleware));

export default rootStore;
