import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import rootReducer from './reducers/rootReducer';
import { logActions } from './middlewares';
import App from './containers/App';
import './index.css';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, logActions));
const store = createStore(rootReducer, composedEnhancers);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/about' element={<h1>Lol</h1>} />
			</Routes>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
