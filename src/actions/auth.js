import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILED, USER_LOADED, AUTH_ERROR, LOGOUT, CLEAR_PROFILE } from './types';
import setAuthToken from '../utils/setAuthToken';

// Load User
export const loadUser = () => async (dispatch) => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}

	try {
		const res = await axios.get('https://intermediautoapi.herokuapp.com/api/auth');

		dispatch({
			type: USER_LOADED,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: AUTH_ERROR
		});
	}
};

//Login

export const adminLogin = ({ email, password }) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const body = JSON.stringify({ email, password });

	try {
		const res = await axios.post('https://intermediautoapi.herokuapp.com/api/auth', body, config);
		console.log(res);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data
		});
		dispatch(loadUser());
	} catch (err) {
		dispatch({
			type: LOGIN_FAILED
		});
	}
};

// Logout / Clear Profile
export const logout = () => (dispatch) => {
	dispatch({ type: CLEAR_PROFILE });
	dispatch({ type: LOGOUT });
};
