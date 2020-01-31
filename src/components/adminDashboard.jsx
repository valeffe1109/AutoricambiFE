import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addCar } from '../actions/addCars';
import { Redirect } from 'react-router-dom';

const AdminDashboard = ({ addCar, isAuthenticated }) => {
	const [ formData, setFormData ] = useState({
		titolo: '',
		modello: '',
		descrizione: '',
		prezzo: '',
		foto1: '',
		foto2: '',
		foto3: '',
		foto4: '',
		foto5: '',
		foto6: '',
		foto7: ''
	});
	const { titolo, modello, codice, descrizione, prezzo, foto1, foto2, foto3, foto4, foto5, foto6, foto7 } = formData;

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
	const onSubmit = (e) => {
		e.preventDefault();
		addCar({ titolo, modello, codice, descrizione, prezzo, foto1, foto2, foto3, foto4, foto5, foto6, foto7 });
		console.log(formData);
	};
	if (!isAuthenticated) {
		return <Redirect to="/AdminLogin" />;
	}
	return (
		<div className="container">
			<Form onSubmit={(e) => onSubmit(e)}>
				<Form.Group controlId="formNome">
					<Form.Label>Nome</Form.Label>
					<Form.Control
						type="titolo"
						name="titolo"
						value={titolo}
						onChange={(e) => onChange(e)}
						placeholder="Titolo"
					/>
				</Form.Group>
				<Form.Group controlId="formModello">
					<Form.Label>Modello Auto</Form.Label>
					<Form.Control
						type="modello"
						name="modello"
						value={modello}
						onChange={(e) => onChange(e)}
						placeholder="Inserisci il Modello"
					/>
				</Form.Group>
				<Form.Group controlId="formDescrizione">
					<Form.Label>Descrizione Ricambio</Form.Label>
					<Form.Control
						as="textarea"
						type="descrizione"
						name="descrizione"
						value={descrizione}
						onChange={(e) => onChange(e)}
						placeholder="Inserisci Descrizione"
					/>
				</Form.Group>
				<Form.Group controlId="formPrezzo">
					<Form.Label>Prezzo</Form.Label>
					<Form.Control
						type="prezzo"
						name="prezzo"
						value={prezzo}
						onChange={(e) => onChange(e)}
						placeholder="Prezzo"
					/>
				</Form.Group>
				<Form.Group controlId="formFoto1">
					<Form.Label>Foto 1</Form.Label>
					<Form.Control
						type="foto1"
						name="foto1"
						value={foto1}
						onChange={(e) => onChange(e)}
						placeholder="Link alla foto"
					/>
				</Form.Group>
				<Form.Group controlId="formFoto2">
					<Form.Label>Foto 2</Form.Label>
					<Form.Control
						type="foto2"
						name="foto2"
						value={foto2}
						onChange={(e) => onChange(e)}
						placeholder="Link alla foto"
					/>
				</Form.Group>
				<Form.Group controlId="formFoto3">
					<Form.Label>Foto 3</Form.Label>
					<Form.Control
						type="foto3"
						name="foto3"
						value={foto3}
						onChange={(e) => onChange(e)}
						placeholder="Link alla foto"
					/>
				</Form.Group>
				<Form.Group controlId="formFoto4">
					<Form.Label>Foto 4</Form.Label>
					<Form.Control
						type="foto4"
						name="foto4"
						value={foto4}
						onChange={(e) => onChange(e)}
						placeholder="Link alla foto"
					/>
				</Form.Group>
				<Form.Group controlId="formFoto5">
					<Form.Label>Foto 5</Form.Label>
					<Form.Control
						type="foto5"
						name="foto5"
						value={foto5}
						onChange={(e) => onChange(e)}
						placeholder="Link alla foto"
					/>
				</Form.Group>
				<Form.Group controlId="formFoto6">
					<Form.Label>Foto 6</Form.Label>
					<Form.Control
						type="foto6"
						name="foto6"
						value={foto6}
						onChange={(e) => onChange(e)}
						placeholder="Link alla foto"
					/>
				</Form.Group>
				<Form.Group controlId="formFoto7">
					<Form.Label>Foto 7</Form.Label>
					<Form.Control
						type="foto7"
						name="foto7"
						value={foto7}
						onChange={(e) => onChange(e)}
						placeholder="Link alla foto"
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Aggiungi Auto
				</Button>
			</Form>
		</div>
	);
};
const mapStateToProps = (state) => ({
	added: state.added,
	isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { addCar })(AdminDashboard);
