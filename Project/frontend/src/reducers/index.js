import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import videos from './videos';
import auth from "./auth";

export default combineReducers({
  form: formReducer,
  videos,
  auth
});