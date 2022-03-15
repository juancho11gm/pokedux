import { ACTION_TYPES } from '../actions/type';

const initialState = {
	list: [],
	loading: false,
};

export const reducerObject = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPES.SET_POKEMON:
			return {
				...state,
				list: action.payload,
			};
		case ACTION_TYPES.TOGGLE_LOADER:
			return {
				...state,
				loading: !state.loading,
			};
		case ACTION_TYPES.SET_FAVORITE:
			return {
				...state,
				list: state.list.map((pokemon) => {
					if (pokemon.id === action.payload) {
						pokemon.favorite = !pokemon.favorite;
					}
					return pokemon;
				}),
			};

		default:
			return state;
	}
};
