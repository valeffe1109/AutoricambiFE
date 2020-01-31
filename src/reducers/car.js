import { GET_CARS, GET_CAR, GET_FAILED } from '../actions/types';

const initialState = {
	cars: [],
	car: null,
	loading: true,
	error: {}
};

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_CARS:
			return {
				...state,
				cars: payload,
				loading: false
			};
		case GET_CAR:
			return {
				...state,
				car: payload,
				loading: false
			};
		case GET_FAILED:
			return {
				...state,
				error: payload,
				loading: false
			};
		default:
			return state;
	}
}
