import axios from 'axios';
import { NEWCOMPONENT_ADDED, NEWCOMPONENT_FAIL } from './types';

//Register User
export const addComponent = ({ nome, modello, codice, descrizione, prezzo, foto }) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const body = JSON.stringify({ nome, modello, codice, descrizione, prezzo, foto });

	try {
		const res = await axios.post('http://localhost:5000/api/ricambi', body, config);
		console.log(res);
		dispatch({
			type: NEWCOMPONENT_ADDED
		});
	} catch (err) {
		dispatch({
			type: NEWCOMPONENT_FAIL
		});
	}
};
