import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteCar } from '../actions/car';
import Contatti from './Contatti';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';

const CarDetails = ({
	deleteCar,
	auth: { isAuthenticated },
	car: { _id, titolo, modello, descrizione, prezzo, foto1, foto2, foto3, foto4, foto5, foto6, foto7 }
}) => {
	const guestDetails = (
		<Fragment>
			<Container>
				<Row>
					<Col sm={12} md={12} lg={6}>
						<Carousel>
							<Carousel.Item>
								<img className="d-block w-100 img-fluid" src={foto1} alt="First slide" />
								<Carousel.Caption>
									<h3>{modello}</h3>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={foto2} alt="Third slide" />

								<Carousel.Caption>
									<h3>{modello}</h3>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={foto3} alt="Third slide" />

								<Carousel.Caption>
									<h3>{modello}</h3>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={foto4} alt="First slide" />
								<Carousel.Caption>
									<h3>{modello}</h3>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={foto5} alt="First slide" />
								<Carousel.Caption>
									<h3>{modello}</h3>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={foto6} alt="First slide" />
								<Carousel.Caption>
									<h3>{modello}</h3>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={foto7} alt="First slide" />
								<Carousel.Caption>
									<h3>{modello}</h3>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</Col>
					<Col sm={12} md={12} lg={6}>
						<h2 className="text-center mt-5">{titolo}</h2>
						<h4 className="text-center">{modello}</h4>
						<p className="text-center">{descrizione}</p>
					</Col>
				</Row>
				<Row>
					<Col sm={12} md={12} lg={12}>
						<h1 className="text-center mt-5">SEI INTERESSATO A QUEST'AUTO?</h1>
					</Col>
				</Row>
			</Container>
			<Contatti />
		</Fragment>
	);

	const adminDetails = (
		<Fragment>
			<Container>
				<Row>
					<Col sm={12} md={12} lg={6}>
						<Carousel>
							<Carousel.Item>
								<img className="d-block w-100 img-fluid" src={foto1} alt="First slide" />
								<Carousel.Caption>
									<h3>{modello}</h3>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={foto2} alt="Third slide" />

								<Carousel.Caption>
									<h3>{modello}</h3>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={foto3} alt="Third slide" />

								<Carousel.Caption>
									<h3>{modello}</h3>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={foto4} alt="First slide" />
								<Carousel.Caption>
									<h3>{modello}</h3>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={foto5} alt="First slide" />
								<Carousel.Caption>
									<h3>{modello}</h3>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={foto6} alt="First slide" />
								<Carousel.Caption>
									<h3>{modello}</h3>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={foto7} alt="First slide" />
								<Carousel.Caption>
									<h3>{modello}</h3>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</Col>
					<Col sm={12} md={12} lg={6}>
						<h2 className="text-center mt-5">{titolo}</h2>
						<h4 className="text-center">{modello}</h4>
						<p className="text-center">{descrizione}</p>
						<p className="text-center">
							<Button variant="outline-info" style={{ marginRight: '1rem' }}>
								MODIFICA
							</Button>

							<Button variant="outline-danger" onClick={() => deleteCar(_id)}>
								CANCELLA
							</Button>
						</p>
					</Col>
				</Row>
				<Row className="mt-5">
					<Col sm={12} md={12} lg={12}>
						<h1 className="text-center">SEI INTERESSATO A QUEST'AUTO?</h1>
					</Col>
				</Row>
			</Container>
			<Contatti />
		</Fragment>
	);

	if (isAuthenticated) {
		return adminDetails;
	} else {
		return guestDetails;
	}
};
CarDetails.propTypes = {
	car: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	deleteCar: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
	auth: state.auth
});
export default connect(mapStateToProps, { deleteCar })(CarDetails);
