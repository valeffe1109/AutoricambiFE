import React from 'react';
import { Container, Col, Row, Carousel } from 'react-bootstrap';

const ChiSiamo = () => {
	return (
		<Container>
			<Row>
				<Col sm={12} md={12} lg={6}>
					<h1 className="text-center">COSA È?</h1>
					<p className="text-center">Intermediauto è una webapp dedicata alla compravendita di automobili.</p>
					<ul>
						COSA È POSSIBILE FARE?
						<li>Visionare le automobili disponibili</li>
						<li> Gli admin possono effettuare login e logout tramite Token</li>
						<li>Gli admin possono aggiungere, modificare e cancellare gli annunci</li>
					</ul>
				</Col>
				<Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
					<Carousel>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="https://i.ibb.co/cJsgjKV/mercedes-benz-parked-in-a-row-164634-1.jpg"
								alt="First slide"
							/>
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="https://i.ibb.co/cJsgjKV/mercedes-benz-parked-in-a-row-164634-1.jpg"
								alt="Third slide"
							/>

							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="https://i.ibb.co/cJsgjKV/mercedes-benz-parked-in-a-row-164634-1.jpg"
								alt="Third slide"
							/>

							<Carousel.Caption>
								<h3>Third slide label</h3>
								<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Col>
			</Row>
		</Container>
	);
};

export default ChiSiamo;
