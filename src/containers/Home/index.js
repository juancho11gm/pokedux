import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import { getPokemons } from '../../api/getPokemons';
import { setPokemon } from '../../actions';
import './styles.css';

function Home() {
	const dispatch = useDispatch();
	const list = useSelector((state) => state.list);

	useEffect(() => {
		const fetchPokemons = async () => {
			const response = await getPokemons();
			dispatch(setPokemon(response.results));
		};

		fetchPokemons();
	}, [dispatch]);

	return (
		<div className='Home'>
			<Searcher />
			<PokemonList pokemons={list} />
		</div>
	);
}

export default Home;
