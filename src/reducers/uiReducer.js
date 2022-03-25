import { ACTION_TYPES } from '../actions/type';

const initialState = {
	loading: false,
};

export const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPES.TOGGLE_LOADER:
			return {
				...state,
				loading: !state.loading,
			};
		default:
			return state;
	}
};
