import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
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

const rootStore = createStore(rootReducer, applyMiddleware(...middleware));

export default rootStore;
