import React, { Fragment } from 'react';
import { Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../actions/auth.js';

const Menu = ({ auth: { isAuthenticated, loading }, logout }) => {
	const adminNav = (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link>Features</Nav.Link>
					<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Nav>
					<Nav.Link href="#deets">More deets</Nav.Link>
					<Nav.Link eventKey={2} href="#memes">
						Dank memes
					</Nav.Link>
					<Button onClick={logout} variant="danger">
						LOGOUT
					</Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);

	const guestNav = (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#pricing">PROVA</Nav.Link>
					<NavDropdown title="ProvaGuest" id="collasible-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Nav>
					<Nav.Link href="#deets">More deets</Nav.Link>
					<Nav.Link eventKey={2} href="/AdminLogin">
						AdminLogin
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
	if (isAuthenticated) {
		return adminNav;
	} else {
		return guestNav;
	}
};
Menu.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, { logout })(Menu);
