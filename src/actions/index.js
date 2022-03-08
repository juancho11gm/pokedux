import axios from 'axios';
import { getPokemons } from '../api/getPokemons';
import { ACTION_TYPES } from './type';

export const setPokemons = (payload) => ({
	type: ACTION_TYPES.SET_POKEMON,
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

export const getPokemonWithDetails = () => (dispatch) => {
	const fetchPokemons = async () => {
		try {
			const pokemonList = await getPokemons();
			const pokemonReponse = await Promise.all(
				pokemonList.results.map((pokemon) => axios.get(pokemon.url))
			);
			const pokemonData = pokemonReponse.map((response) => response.data);
			dispatch(setPokemons(pokemonData));
		} catch (error) {
			dispatch(
				setError({
					message: 'Error',
				})
			);
		}
	};

	fetchPokemons();
};
