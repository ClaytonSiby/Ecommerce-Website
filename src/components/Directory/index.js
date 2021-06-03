import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ShopMen from '../../assets/man_suit.jpg';
import ShopWomen from '../../assets/women.jpg';
import './style.scss';

const Directory = () => (
	<Container className="directory">
		<Row className="fashionContainer">
			<Col
				xs={12}
				sm={6}
				md={6}
				className="womenWear"
				style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .5 )), url(${ShopWomen})` }}
			>
				<button type="button" className="btn-md btn-info">
					<a href="#example" className="text-light">
						Shop Women&apos;s
					</a>
				</button>
			</Col>
			<Col
				xs={12}
				sm={6}
				md={6}
				className="menWear"
				style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .5 )), url(${ShopMen})` }}
			>
					<button type="button" className="btn-info btn-md">
						<a href="#example" className="text-light">
							Shop Men&apos;s
						</a>
					</button>
			</Col>
		</Row>
	</Container>
);

export default Directory;
