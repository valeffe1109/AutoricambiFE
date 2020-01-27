import { NEWCOMPONENT_ADDED, NEWCOMPONENT_FAIL } from '../actions/types';

const initialState = {
	added: false
};

export default function(state = initialState, action) {
	const { type } = action;

	switch (type) {
		case NEWCOMPONENT_ADDED:
			return {
				...state,
				added: true
			};
		case NEWCOMPONENT_FAIL:
			return {
				...state,
				added: false
			};
		default:
			return state;
	}
}
