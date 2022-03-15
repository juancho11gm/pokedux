import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import Loader from '../../components/Loader';
import { getPokemonWithDetails } from '../../actions';
import './styles.css';

function Home() {
	const dispatch = useDispatch();
	const list = useSelector((state) => state.list);
	const loading = useSelector((state) => state.loading);

	useEffect(() => {
		dispatch(getPokemonWithDetails());
	}, [dispatch]);

	return (
		<div className='Home'>
			{loading && <Loader />}
			<Searcher />
			<PokemonList pokemons={list} />
		</div>
	);
}

export default Home;
