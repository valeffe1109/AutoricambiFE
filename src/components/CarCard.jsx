import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

const CarCard = ({
	car: { _id, titolo, modello, descrizione, prezzo, foto1, foto2, foto3, foto4, foto5, foto6, foto7 }
}) => {
	return (
		<Fragment>
			<Card>
				<Card.Img variant="top" src={foto1} className="img-fluid" />
				<Card.Body>
					<Card.Title className="text-center">{titolo}</Card.Title>
					<Card.Text>
						<p className="text-center">{prezzo} €</p>
					</Card.Text>
					<Card.Link href={`/Dettagli/${_id}`}>
						<p className="text-center">
							<Button variant="outline-success" size="lg">
								MAGGIORI INFO!
							</Button>
						</p>
					</Card.Link>
				</Card.Body>
			</Card>
		</Fragment>
	);
};

CarCard.propTypes = {
	car: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(CarCard);
