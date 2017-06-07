import React, {Component} from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { StaticRouter } from 'react-router';


import Root from './root';
import reducer from './reducers';
const store = createStore(reducer, applyMiddleware(thunk));


class ServerApp extends Component {
	render() {
		return (
			<Provider store={store}>
				<StaticRouter
					location={this.props.url}
					context={this.props.context}>
					<Root/>
				</StaticRouter>
			</Provider>
		)
	}

}

export default ServerApp;

