import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Divider, Grid, Image, Label } from 'semantic-ui-react';
import { getPokemon } from '../../api/getPokemons';
import Layout from '../../components/Layout';
import { MAIN_COLOR } from '../../utils/constants';

const Pokemon = () => {
	let params = useParams();
	const [pokemon, setPokemon] = useState(null);

	useEffect(() => {
		getPokemon(params.pokemonId).then((data) => {
			setPokemon(data);
		});
	}, [params.pokemonId]);

	return (
		<Layout>
			{pokemon !== null ? (
				<Grid.Column mobile={16} tablet={8} computer={4}>
					<div className='PokemonCard'>
						<Image centered src={pokemon.sprites.front_default} />
						<h2 className='PokemonCard-title'>{pokemon.name}</h2>
						<p>Weight: {pokemon.weight}</p>
						<p>Height: {pokemon.height}</p>
						<Divider />
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							<div>
								{pokemon.types.map((type) => (
									<Label
										key={`${pokemon.id}-${type.type.name}`}
										color={MAIN_COLOR}
									>
										{type.type.name}
									</Label>
								))}
							</div>
						</div>
					</div>
				</Grid.Column>
			) : null}
		</Layout>
	);
};

export default Pokemon;
