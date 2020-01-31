import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CarCard from './CarCard';
import { Container, Row, Col, Form, Button, FormControl } from 'react-bootstrap';
import { getCars } from '../actions/car';

const ParcoAuto = ({ getCars, car: { cars, loading } }) => {
	useEffect(
		() => {
			getCars();
		},
		[ getCars ]
	);
	return loading ? (
		<h1>OK</h1>
	) : (
		<Fragment>
			<Container className="mb-5">
				<Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-success">Search</Button>
				</Form>
			</Container>
			<Container>
				<Row>
					{cars.map((car) => (
						<Col sm={4} className="d-flex justify-content-center">
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
