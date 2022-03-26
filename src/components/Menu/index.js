import React from 'react';
import { Link } from 'react-router-dom';
import { Menu as SemanticMenu, Container, Image } from 'semantic-ui-react';
import logo from '../../statics/images/logo_v4.svg';

const Menu = () => {
	return (
		<SemanticMenu fixed='top'>
			<Container>
				<SemanticMenu.Item link>
					<Link to='/'>
						<Image size='small' src={logo} />
					</Link>
				</SemanticMenu.Item>
				<SemanticMenu.Item link position='right'>
					<Link to='/favorites'>Favorites</Link>
				</SemanticMenu.Item>
			</Container>
		</SemanticMenu>
	);
};

export default Menu;
