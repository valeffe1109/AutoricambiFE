import { NEWCAR_ADDED, NEWCAR_FAIL } from '../actions/types';

const initialState = {
	added: false
};

export default function(state = initialState, action) {
	const { type } = action;

	switch (type) {
		case NEWCAR_ADDED:
			return {
				...state,
				added: true
			};
		case NEWCAR_FAIL:
			return {
				...state,
				added: false
			};
		default:
			return state;
	}
}
