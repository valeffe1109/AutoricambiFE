import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CarCard from './CarCard';
import { Container, Row, Col } from 'react-bootstrap';
import { getCars } from '../actions/car';
import Spinn from './Spinn';
const ParcoAuto = ({ getCars, car: { cars, loading } }) => {
	useEffect(
		() => {
			getCars();
		},
		[ getCars ]
	);
	return loading ? (
		<Spinn />
	) : (
		<Fragment>
			<Container className="mb-5" />
			<Container>
				<Row>
					{cars.map((car) => (
						<Col key={car._id} sm={4} className="d-flex justify-content-center">
							<CarCard key={car._id} car={car} />
						</Col>
					))}
				</Row>
			</Container>
		</Fragment>
	);
};
ParcoAuto.propTypes = {
	getCars: PropTypes.func.isRequired,
	car: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	car: state.car
});

export default connect(mapStateToProps, { getCars })(ParcoAuto);
