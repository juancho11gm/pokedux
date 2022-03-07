import { ACTION_TYPES } from '../actions/type';

const initialState = {
	list: [],
};

const reducerObject = (state, payload) => ({
	[ACTION_TYPES.SET_POKEMON]: {
		...state,
		list: payload,
	},
});

export const pokemonReducer = (state = initialState, action) =>
	reducerObject(state, action.payload)[action.type] || state;
