import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu as SemanticMenu, Container, Image } from 'semantic-ui-react';
import logo from '../../statics/images/logo_v4.svg';
import './styles.css';

const Menu = () => {
	return (
		<SemanticMenu fixed='top'>
			<Container>
				<SemanticMenu.Item link>
					<NavLink to='/pokemons'>
						<Image size='small' src={logo} />
					</NavLink>
				</SemanticMenu.Item>
				<SemanticMenu.Item link position='right'>
					{/* 
						6. Active Links

						We swapped out Link for NavLink.
						We changed the style from a simple object to a function that returns an object.
						We changed the color of our link by looking at the isActive value that NavLink passed to our styling function.
					*/}
					<NavLink
						to='/favorites'
						className={({ isActive }) => (isActive ? 'blueviolet' : 'grey')}
					>
						Favorites
					</NavLink>
				</SemanticMenu.Item>
			</Container>
		</SemanticMenu>
	);
};

export default Menu;
