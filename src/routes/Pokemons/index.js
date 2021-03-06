import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import PokemonList from '../../components/PokemonList';
import Layout from '../../components/Layout';
import Searcher from '../../components/Searcher';
import Loader from '../../components/Loader';
import { getPokemonWithDetails } from '../../actions';

function Pokemons() {
	/* 
		7. Search Params
	
		useSearchParams is now returning a URLSearchParams with "filter" as one of its values.
	*/
	let [searchParams] = useSearchParams();

	const pokemons = useSelector((state) => state.pokemon.pokemons);
	let filter = searchParams.get('filter');

	const filteredPokemons = filter
		? pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(filter))
		: pokemons;
	const loading = useSelector((state) => state.ui.loading);
	const dispatch = useDispatch();

	useEffect(() => {
		if (pokemons.length === 0) {
			dispatch(getPokemonWithDetails());
		}
	}, [dispatch, pokemons]);

	return (
		<Layout>
			<div className='Home'>
				{loading && <Loader />}
				<Searcher />
				<PokemonList pokemons={filteredPokemons} />
			</div>
		</Layout>
	);
}

export default Pokemons;
