import axiosInstance from './config';
export const getPokemons = (limit = 151) =>
	axiosInstance
		.get(`/pokemon?limit=${limit}`)
		.then((response) => response.data)
		.catch((error) => console.error(error));

export const getPokemon = (id) =>
	axiosInstance
		.get(`/pokemon/${id}`)
		.then((response) => response.data)
		.catch((error) => console.error(error));
