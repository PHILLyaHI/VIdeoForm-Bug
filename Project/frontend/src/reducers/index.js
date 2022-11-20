// reducers/index.js

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import videos from './videos';

export default combineReducers({
  form: formReducer,
  videos
});