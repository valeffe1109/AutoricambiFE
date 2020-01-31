import { combineReducers } from 'redux';
import addCar from './addCar';
import auth from './auth';
import car from './car';

export default combineReducers({
	addCar,
	auth,
	car
});
