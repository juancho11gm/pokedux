import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import { getPokemonWithDetails } from '../../actions';
import './styles.css';

function Home() {
	const dispatch = useDispatch();
	const list = useSelector((state) => state.list);

	useEffect(() => {
		dispatch(getPokemonWithDetails());
	}, [dispatch]);

	return (
		<div className='Home'>
			<Searcher />
			<PokemonList pokemons={list} />
		</div>
	);
}

export default Home;
