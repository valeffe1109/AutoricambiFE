import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import CarDetails from './CarDetails';
import { getCar } from '../actions/car.js';
import { connect } from 'react-redux';
import Spinn from './Spinn';

const Dettagli = ({ getCar, car: { car, loading }, match }) => {
	useEffect(
		() => {
			getCar(match.params.id);
		},
		[ getCar ]
	);
	return loading ? (
		<Spinn />
	) : (
		<Fragment>
			<CarDetails car={car} />
		</Fragment>
	);
};
Dettagli.propTypes = {
	getCar: PropTypes.func.isRequired,
	car: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	car: state.car
});

export default connect(mapStateToProps, { getCar })(Dettagli);
