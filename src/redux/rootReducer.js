import { combineReducers } from 'redux';

import userReducer from './Users/user.reducer';

export default combineReducers({
  user: userReducer,
});
