import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import {BrowserRouter} from "react-router-dom";

let renderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={store.getState()}
			     dispatch={store.dispatch.bind(store)}
			/>
		</BrowserRouter>, document.getElementById('root')

	);
}
renderEntireTree(store.getState());
store.subscribe(renderEntireTree);

