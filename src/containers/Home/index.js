import React, { useEffect } from 'react';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import './styles.css';
import { getPokemons } from '../../api/getPokemons';
import { setPokemon } from '../../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
	list: state.list,
});

const mapDispatchToProps = (dispatch) => ({
	setPokemons: (values) => {
		return dispatch(setPokemon(values));
	},
});

function Home({ list, setPokemons }) {
	useEffect(() => {
		const fetchPokemons = async () => {
			const response = await getPokemons();
			setPokemons(response.results);
		};

		fetchPokemons();
	}, [setPokemons]);

	return (
		<div className='Home'>
			<Searcher />
			<PokemonList />
		</div>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
