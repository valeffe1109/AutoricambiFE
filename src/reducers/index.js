import { combineReducers } from 'redux';
import carParts from './carParts';
import auth from './auth';

export default combineReducers({
	carParts,
	auth
});
