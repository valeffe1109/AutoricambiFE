import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const Jumbo = () => {
	return (
		<Jumbotron fluid>
			<Container>
				<h1>Fluid jumbotron</h1>
				<p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
			</Container>
		</Jumbotron>
	);
};

export default Jumbo;
