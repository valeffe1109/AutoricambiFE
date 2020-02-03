import axios from 'axios';

import { GET_CARS, GET_CAR, GET_FAILED, DELETE_CAR } from './types';

export const getCars = () => async (dispatch) => {
	try {
		const res = await axios.get('https://intermediautoapi.herokuapp.com/api/auto');
		dispatch({
			type: GET_CARS,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: GET_FAILED,
			payload: { msg: err.response.statusText, status: err.response.status }
		});
	}
};

export const getCar = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`https://intermediautoapi.herokuapp.com/api/auto/${id}`);
		dispatch({
			type: GET_CAR,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: GET_FAILED,
			payload: { msg: err.response.statusText, status: err.response.status }
		});
	}
};

// Delete car
export const deleteCar = (id) => async (dispatch) => {
	try {
		await axios.delete(`https://intermediautoapi.herokuapp.com/api/auto/${id}`);

		dispatch({
			type: DELETE_CAR,
			payload: id
		});
	} catch (err) {
		dispatch({
			type: GET_FAILED,
			payload: { msg: err.response.statusText, status: err.response.status }
		});
	}
};
