import { combineReducers } from 'redux';
import authReducers from './auth';

// we unify all the individual states into one
export default combineReducers({ auth: authReducers });
