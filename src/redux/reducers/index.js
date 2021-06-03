import { combineReducers } from 'redux';

import { counterReducer } from './counterReducer';
import { authReducer } from './authReducer';
import { companyReducer } from './companyReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: authReducer,
  companies: companyReducer,
});

export default rootReducer;
