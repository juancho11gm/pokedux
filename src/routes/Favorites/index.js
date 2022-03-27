import React from 'react';
import { useSelector } from 'react-redux';
import PokemonList from '../../components/PokemonList';
import Layout from '../../components/Layout';
import './styles.css';

function Favorites() {
	const pokemons = useSelector((state) => state.pokemon.pokemons);
	const filteredPokemons = pokemons.filter((pokemon) => pokemon.favorite);

	return (
		<Layout>
			<div className='Favorites'>
				<PokemonList pokemons={filteredPokemons} />
			</div>
		</Layout>
	);
}

export default Favorites;
