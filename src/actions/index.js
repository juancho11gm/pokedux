import { ACTION_TYPES } from './type';

export const setPokemon = (payload) => ({
	type: ACTION_TYPES.SET_POKEMON,
	payload,
});
