import React from 'react';
import { Container, Col, Row, Carousel } from 'react-bootstrap';

const ChiSiamo = () => {
	return (
		<Container>
			<Row>
				<Col sm={6}>
					<h1 className="text-center">LOREM IPSUM</h1>
					<p className="text-center">
						Cos’è Lorem Ipsum? Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e
						della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo,
						quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo
						campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla
						videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60,
						con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del
						Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva
						versioni del Lorem Ipsum.
					</p>
				</Col>
				<Col sm={6} className="d-flex justify-content-center">
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
