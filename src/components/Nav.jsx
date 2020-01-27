import React from 'react';
import { Nav } from 'react-bootstrap';

const Menu = () => {
	return (
		<Nav className="justify-content-center" activeKey="/home">
			<Nav.Item>
				<Nav.Link href="/Home">Home</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/AdminLogin">Admin</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="link-2">Link</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="disabled" disabled>
					Disabled
				</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};
export default Menu;
