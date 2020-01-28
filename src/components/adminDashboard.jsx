import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addComponent } from '../actions/carParts';
import { Redirect } from 'react-router-dom';

const AdminDashboard = ({ addComponent, isAuthenticated }) => {
	const [ formData, setFormData ] = useState({
		nome: '',
		modello: '',
		codice: '',
		descrizione: '',
		prezzo: '',
		foto: ''
	});
	const { nome, modello, codice, descrizione, prezzo, foto } = formData;

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
	const onSubmit = (e) => {
		e.preventDefault();
		addComponent({ nome, modello, codice, descrizione, prezzo, foto });
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
						type="nome"
						name="nome"
						value={nome}
						onChange={(e) => onChange(e)}
						placeholder="Nome del pezzo"
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
				<Form.Group controlId="formCodice">
					<Form.Label>Codice</Form.Label>
					<Form.Control
						type="codice"
						name="codice"
						value={codice}
						onChange={(e) => onChange(e)}
						placeholder="Inserisci Codice Articolo"
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
				<Form.Group controlId="formFoto">
					<Form.Label>Foto</Form.Label>
					<Form.Control
						type="foto"
						name="foto"
						value={foto}
						onChange={(e) => onChange(e)}
						placeholder="Link alla foto"
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Aggiungi Ricambio
				</Button>
			</Form>
		</div>
	);
};
const mapStateToProps = (state) => ({
	added: state.added,
	isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { addComponent })(AdminDashboard);
