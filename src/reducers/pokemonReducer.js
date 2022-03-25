import { fromJS } from 'immutable';
import { ACTION_TYPES } from '../actions/type';

const initialState = fromJS({
	pokemons: [],
	filter: '',
});

export const pokemonReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPES.SET_POKEMONS:
			return state.set('pokemons', fromJS(action.payload));
		case ACTION_TYPES.SET_FAVORITE:
			const currentPokemonIndex = state
				.get('pokemons')
				.findIndex((pokemon) => pokemon.get('id') === action.payload);

			const isFavorite = state.getIn([
				'pokemons',
				currentPokemonIndex,
				'favorite',
			]);
			return state
				.setIn(['pokemons', currentPokemonIndex, 'favorite'], !isFavorite)
				.setIn(
					['filteredPokemons', currentPokemonIndex, 'favorite'],
					!isFavorite
				);

		case ACTION_TYPES.SET_FILTER:
			return state.set('filter', action.payload);

		default:
			return state;
	}
};
