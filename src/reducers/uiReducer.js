import { fromJS } from 'immutable';
import { ACTION_TYPES } from '../actions/type';

const initialState = fromJS({
	loading: false,
});

export const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPES.TOGGLE_LOADER:
			return state.set('loading', !state.get('loading'));
		default:
			return state;
	}
};
