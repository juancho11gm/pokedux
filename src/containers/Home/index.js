import { Link } from 'react-router-dom';
import './styles.css';

function Home() {
	return (
		<div>
			<h1>Pokemons App</h1>
			<nav
				style={{
					borderBottom: 'solid 1px',
					paddingBottom: '1rem',
				}}
			>
				<Link to='/pokemons'>Pokemons</Link> |{' '}
				<Link to='/favorites'>Favorite Pokemons</Link>
			</nav>
		</div>
	);
}

export default Home;
