import React, { Fragment } from 'react';
import ChiSiamo from './ChiSiamo';
import Jumbo from './Jumbotron';
import Contatti from './Contatti';

const Home = () => {
	return (
		<Fragment>
			<Jumbo />
			<ChiSiamo />
			<Contatti />
		</Fragment>
	);
};

export default Home;
