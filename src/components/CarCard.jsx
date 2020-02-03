import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';

const CarCard = ({
	car: { _id, titolo, modello, descrizione, prezzo, foto1, foto2, foto3, foto4, foto5, foto6, foto7 }
}) => {
	return (
		<Fragment>
			<Card>
				<Card.Img variant="top" src={foto1} className="img-fluid" />
				<Card.Body>
					<Card.Title>{titolo}</Card.Title>
					<Card.Text>
						<p>{modello}</p>
						{prezzo} €
					</Card.Text>
				</Card.Body>

				<Card.Body>
					<Card.Link href={`/Dettagli/${_id}`}>MAGGIORI INFO!</Card.Link>
					<Card.Link href="#">Another Link</Card.Link>
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
