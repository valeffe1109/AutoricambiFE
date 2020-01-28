import React from 'react';
import { useState } from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { adminLogin } from '../actions/auth.js';
import PropTypes from 'prop-types';
import { Form, Button, Container } from 'react-bootstrap';

const AdminLogin = ({ adminLogin, isAuthenticated }) => {
	const [ formData, setFormData ] = useState({
		email: '',
		password: ''
	});
	const { email, password } = formData;

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
	const onSubmit = (e) => {
		e.preventDefault();
		adminLogin({ email, password });
		console.log(formData);
	};

	if (isAuthenticated) {
		return <Redirect to="/Admin" />;
	}
	return (
		<Fragment>
			<Container>
				<Form onSubmit={(e) => onSubmit(e)}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							name="email"
							value={email}
							onChange={(e) => onChange(e)}
							placeholder="Enter email"
						/>
						<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							name="password"
							value={password}
							onChange={(e) => onChange(e)}
							placeholder="Password"
						/>
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</Container>
		</Fragment>
	);
};
AdminLogin.propTypes = {
	adminLogin: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { adminLogin })(AdminLogin);
