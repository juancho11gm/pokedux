import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Search } from 'semantic-ui-react';
import { setFilter } from '../../actions';
import './styles.css';

export default function SearchBar() {
	const dispatch = useDispatch();
	const filter = useSelector((state) => state.get('pokemon').get('filter'));

	return (
		<div className='Searcher wrapper'>
			<Grid>
				<Grid.Column
					widescreen={10}
					largeScreen={10}
					mobile={16}
					className='Searcher'
				>
					<Search
						aligned='right'
						input={{ fluid: true }}
						showNoResults={false}
						placeholder='Encuentra a tu Pokemón favorito'
						value={filter}
						onSearchChange={(e, data) => {
							dispatch(setFilter(data.value));
						}}
					/>
				</Grid.Column>
			</Grid>
		</div>
	);
}
