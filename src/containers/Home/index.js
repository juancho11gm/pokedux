import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import Loader from '../../components/Loader';
import Layout from '../../components/Layout';
import { getPokemonWithDetails } from '../../actions';
import './styles.css';

function Home() {
	const pokemons = useSelector((state) => state.pokemon.pokemons);
	const filter = useSelector((state) => state.pokemon.filter);

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

export default Home;
