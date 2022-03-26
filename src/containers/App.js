import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import { logActions } from '../middlewares';
import Favorites from './Favorites';
import Pokemons from './Pokemons';
import Pokemon from './Pokemon';
import Home from './Home';
import 'semantic-ui-css/semantic.min.css';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, logActions));
const store = createStore(rootReducer, composedEnhancers);

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/pokemons' element={<Pokemons />} />
					<Route path='pokemons/:pokemonId' element={<Pokemon />} />
					<Route path='/favorites' element={<Favorites />} />
					<Route
						path='*'
						element={
							<main style={{ padding: '1rem' }}>
								<p>There's nothing here!</p>
							</main>
						}
					/>
				</Routes>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
