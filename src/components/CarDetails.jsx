import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteCar } from '../actions/car';
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
					<Col sm={6}>
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
					<Col sm={6}>
						<h2 className="text-center">{titolo}</h2>
						<h4 className="text-center">{modello}</h4>
						<p className="text-center">{descrizione}</p>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);

	const adminDetails = (
		<Fragment>
			<Container>
				<Row>
					<Col sm={6}>
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
					<Col sm={6}>
						<h2 className="text-center">{titolo}</h2>
						<h4 className="text-center">{modello}</h4>
						<p className="text-center">{descrizione}</p>
						<p className="text-center">
							<Button style={{ marginRight: '1rem' }}>MODIFICA</Button>

							<Button onClick={() => deleteCar(_id)}>CANCELLA</Button>
						</p>
					</Col>
				</Row>
			</Container>
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
