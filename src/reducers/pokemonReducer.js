import { fromJS } from 'immutable';
import { ACTION_TYPES } from '../actions/type';

const initialState = fromJS({
	list: [],
});

export const pokemonReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPES.SET_POKEMONS:
			return state.set('list', fromJS(action.payload));
		case ACTION_TYPES.SET_FAVORITE:
			const currentPokemonIndex = state
				.get('list')
				.findIndex((pokemon) => pokemon.get('id') === action.payload);

			const isFavorite = state.getIn(['list', currentPokemonIndex, 'favorite']);
			return state.setIn(
				['list', currentPokemonIndex, 'favorite'],
				!isFavorite
			);
		default:
			return state;
	}
};
