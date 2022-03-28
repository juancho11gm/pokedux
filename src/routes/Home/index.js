import { Link, Outlet } from 'react-router-dom';
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
				{/* 
						4. Using Links

						- <Link /> will enable global navigation
						- Link is changing the URL without causing a full page reload.
					*/}
				<Link to='/pokemons'>Pokemons</Link> |{' '}
				<Link to='/favorites'>Favorite Pokemons</Link>
			</nav>
			<Outlet />
		</div>
	);
}

export default Home;
