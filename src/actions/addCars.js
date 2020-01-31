import axios from 'axios';
import { NEWCAR_ADDED, NEWCAR_FAIL } from './types';

//Register User
export const addCar = ({
	titolo,
	modello,
	descrizione,
	prezzo,
	foto1,
	foto2,
	foto3,
	foto4,
	foto5,
	foto6,
	foto7
}) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const body = JSON.stringify({
		titolo,
		modello,
		descrizione,
		prezzo,
		foto1,
		foto2,
		foto3,
		foto4,
		foto5,
		foto6,
		foto7
	});

	try {
		const res = await axios.post('https://intermediautoapi.herokuapp.com/api/auto', body, config);
		console.log(res);
		dispatch({
			type: NEWCAR_ADDED
		});
	} catch (err) {
		dispatch({
			type: NEWCAR_FAIL
		});
	}
};
