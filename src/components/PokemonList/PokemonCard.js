import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Image, Label, Divider, Grid, Icon } from 'semantic-ui-react';
import { setFavorite } from '../../actions';
import { DEFAULT_COLOR, FAV_COLOR, MAIN_COLOR } from '../../utils/constants';
import './styles.css';

const PokemonCard = ({ pokemon }) => {
	const dispatch = useDispatch();

	const handleFavorite = (e) => {
		dispatch(setFavorite(pokemon.id));
	};

	const color = pokemon.favorite ? FAV_COLOR : DEFAULT_COLOR;

	return (
		<Grid.Column mobile={16} tablet={8} computer={4}>
			<div className='PokemonCard'>
				<button
					className='PokemonCard-favorite'
					onClick={handleFavorite}
					type='button'
				>
					<Icon name='favorite' color={color} />
				</button>
				<Image centered src={pokemon.sprites.front_default} />
				<h2 className='PokemonCard-title'>{pokemon.name}</h2>
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
							<Label key={`${pokemon.id}-${type.type.name}`} color={MAIN_COLOR}>
								{type.type.name}
							</Label>
						))}
					</div>
					<Link to={`/pokemons/${pokemon.id}`}>Details</Link>
				</div>
			</div>
		</Grid.Column>
	);
};

export default PokemonCard;
