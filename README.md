# Pokedux ![Status badge](https://img.shields.io/badge/status-in%20progress-yellow)

✨ Pokedux developed using React-Redux.

## Redux - State Management

Redux is a predictable State Container for JavaScript Apps.

## Redux vs Context API

|                | Redux                                   | Context API             |
| :------------: | --------------------------------------- | ----------------------- |
|    Debugger    | Easier to track changes through actions | Actions are not defined |
|  Bundle size   | Will increase the bundle size           | Embebed in React        |
|  Middlewares   | Very easy to create custom middlewares  | -                       |
| Learning curve | Medium                                  | Low                     |
|   Rendering    | Prevent unnecessary render              | -                       |

## useSelector vs Connect

|                        | useSelector                            | Connect API                                                  |
| :--------------------: | -------------------------------------- | ------------------------------------------------------------ |
|      Bolierplate       | Less Boilerplates                      | More boilerplates (elements, wrappers, connect)              |
| Split responsabilities | -                                      | High Order Component is created and pass state through props |
|        Testing         | We must ensure that Redux is connected | We only pass props and test it                               |

Redux recommends to use Hooks API.

## Immutability

```js
const userInfo = {
	name: 'Juan',
	age: 22,
};

// Mutable

const updateAge = (user) => {
	user.age = user.age + 1;
	return user;
};

// Immutable: Object.assing

const updateAge = (user) => {
	return Object.assign({}, user, { age: user.age + 1 });
};

// Immutable: Spread Operator

const updateAge = (user) => {
	return {
		...user,
		age: user.age + 1,
	};
};

// Immutable: immutable (It will be an extra package that will increase the app load and the bundle)
import { fromJS } from 'immutable';

const initialState = fromJS({
	list: [],
	loading: false,
});

export const reducerObject = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPES.SET_POKEMON:
			return state.set('list', fromJS(action.payload));
	}
};
```

## Redux Thunk

Thunk middleware for Redux. It allows writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.

## 🚀 How to run

1. Install dependencies
   `yarn`
2. Run development environment
   `yarn start`

## 🛠 Deployment

1. Run build command
   `yarn build`

## 🦀 API

All the data come from [PokeApi](https://pokeapi.co/)

## 🧾 License

The MIT License (MIT)
