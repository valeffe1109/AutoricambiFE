import React from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';

const Jumbo = () => {
	const jumboStyle = {
		backgroundImage: 'url(https://imagizer.imageshack.com/img922/6830/j23pjr.jpg)',
		backgroundSize: 'cover',
		backgroundPosition: 'bottom,center'
	};
	return (
		<Jumbotron fluid style={jumboStyle}>
			<Container>
				<h1 className="text-center">Accedi al nostro parco auto</h1>
				<p className="text-center">
					<Button href="ParcoAuto" variant="outline-dark">
						Clicca Quì
					</Button>
				</p>
			</Container>
		</Jumbotron>
	);
};

export default Jumbo;
