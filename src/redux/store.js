import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import { validationMiddleware, autoLoginMiddleware } from './middleware';

const middleware = [validationMiddleware, autoLoginMiddleware, thunk, logger];

const rootStore = createStore(rootReducer, applyMiddleware(...middleware));

export default rootStore;
