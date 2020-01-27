import React from 'react';
import Nav from './components/Nav';
import { Provider } from 'react-redux';
import { Fragment } from 'react';
import store from './store';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import adminDashboard from './components/adminDashboard';
import Home from './components/Home';
import AdminLogin from './components/AdminLogin';

const App = () => {
	return (
		<Provider store={store}>
			<Fragment>
				<BrowserRouter>
					<Nav />
					<Switch>
						<Route exact path="/Admin" component={adminDashboard} />
						<Route exact path="/Home" component={Home} />
						<Route exact path="/AdminLogin" component={AdminLogin} />
					</Switch>
				</BrowserRouter>
			</Fragment>
		</Provider>
	);
};

export default App;
