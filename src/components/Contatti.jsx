import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const Contatti = () => {
	return (
		<Container className="mt-5 mb-5">
			<h1 className="text-center mb-5">CONTATTACI</h1>
			<Row>
				<Col xs={4} sm={4}>
					<p className="text-center">
						<img
							src="http://imageshack.com/a/img924/6753/OB7YZ5.png"
							className="img-fluid"
							alt=""
							style={{ width: '150px' }}
						/>
					</p>
				</Col>
				<Col xs={4} sm={4}>
					<p className="text-center">
						<img
							src="http://imageshack.com/a/img921/7823/DRNoQg.png
							"
							className="img-fluid"
							alt=""
							style={{ width: '150px' }}
						/>
					</p>
				</Col>
				<Col xs={4} sm={4}>
					<p className="text-center">
						<img
							src="http://imageshack.com/a/img923/1796/JLAxRv.png
							"
							className="img-fluid"
							alt=""
							style={{ width: '150px' }}
						/>
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Contatti;
