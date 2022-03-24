import { combineReducers } from 'redux-immutable';
import { pokemonReducer } from './pokemonReducer';
import { uiReducer } from './uiReducer';

export default combineReducers({
	pokemon: pokemonReducer,
	ui: uiReducer,
});
