import axios from 'axios';
import { getPokemons } from '../api/getPokemons';
import { ACTION_TYPES } from './type';

export const setPokemons = (payload) => ({
	type: ACTION_TYPES.SET_POKEMONS,
	payload,
});

export const setError = (payload) => ({
	type: ACTION_TYPES.CLEAR_ERROR,
	payload,
});

export const clearError = (payload) => ({
	type: ACTION_TYPES.CLEAR_ERROR,
	payload,
});

export const toggleLoader = (payload) => ({
	type: ACTION_TYPES.TOGGLE_LOADER,
});

export const setFavorite = (payload) => ({
	type: ACTION_TYPES.SET_FAVORITE,
	payload,
});

export const getPokemonWithDetails = () => (dispatch) => {
	const fetchPokemons = async () => {
		try {
			dispatch(toggleLoader());

			const pokemonList = await getPokemons();

			const pokemonData = await Promise.all(
				pokemonList.results.map((pokemon) => axios.get(pokemon.url))
			).then((pokemonResponses) => {
				return pokemonResponses.map((response) => response.data);
			});
			dispatch(setPokemons(pokemonData));
			dispatch(toggleLoader());
		} catch (error) {
			dispatch(
				setError({
					message: 'Error',
				})
			);
			dispatch(toggleLoader());
		}
	};

	fetchPokemons();
};
