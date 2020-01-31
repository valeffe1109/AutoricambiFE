import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

const CarDetails = ({
	car: { _id, titolo, modello, descrizione, prezzo, foto1, foto2, foto3, foto4, foto5, foto6, foto7 }
}) => {
	return (
		<Fragment>
			<Container>
				<Row>
					<Col sm={6}>
						<Carousel>
							<Carousel.Item>
								<img className="d-block w-100 img-fluid" src={foto1} alt="First slide" />
								<Carousel.Caption>
									<h3>First slide label</h3>
									<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={foto2} alt="Third slide" />

								<Carousel.Caption>
									<h3>Second slide label</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={foto3} alt="Third slide" />

								<Carousel.Caption>
									<h3>Third slide label</h3>
									<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={foto4} alt="First slide" />
								<Carousel.Caption>
									<h3>First slide label</h3>
									<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={foto5} alt="First slide" />
								<Carousel.Caption>
									<h3>First slide label</h3>
									<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={foto6} alt="First slide" />
								<Carousel.Caption>
									<h3>First slide label</h3>
									<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={foto7} alt="First slide" />
								<Carousel.Caption>
									<h3>First slide label</h3>
									<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</Col>
					<Col sm={6}>
						<h2>{titolo}</h2>
						<h4>{modello}</h4>
						<p>{descrizione}</p>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};
CarDetails.propTypes = {
	car: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(CarDetails);
