import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Grid, Search } from 'semantic-ui-react';
import './styles.css';

export default function SearchBar() {
	/* 
		7. Search Params

		It works a lot like React.useState() but stores and sets the state in the URL search params instead of in memory.
	
		setSearchParams() is putting the ?filter=... search params in the URL and rerendering the router.
	*/
	let [, setSearchParams] = useSearchParams();
	const filter = useSelector((state) => state.pokemon.filter);

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
							const filter = data.value;
							if (filter) {
								setSearchParams({ filter });
							} else {
								setSearchParams({});
							}
						}}
					/>
				</Grid.Column>
			</Grid>
		</div>
	);
}
