import { ACTION_TYPES } from '../actions/type';

const initialState = {
	pokemons: [],
	filter: '',
};

export const pokemonReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPES.SET_POKEMONS:
			return {
				...state,
				pokemons: action.payload,
			};
		case ACTION_TYPES.SET_FAVORITE:
			return {
				...state,
				pokemons: state.pokemons.map((pokemon) => {
					if (pokemon.id === action.payload) {
						pokemon.favorite = !pokemon.favorite;
					}

					return pokemon;
				}),
			};

		case ACTION_TYPES.SET_FILTER:
			return {
				...state,
				filter: action.payload,
			};

		default:
			return state;
	}
};
