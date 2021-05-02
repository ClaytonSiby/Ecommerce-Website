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
        style={{ backgroundImage: `url(${ShopWomen})` }}
      >
        <button type="button" className="btn btn-sm btn-info">
          <a href="#example">Shop Women&apos;s</a>
        </button>
      </Col>
      <Col
        xs={12}
        sm={6}
        md={6}
        className="menWear"
        style={{ backgroundImage: `url(${ShopMen})` }}
      >
        <button type="button" className="btn btn-sm btn-info">
          <a href="#example">Shop Men&apos;s</a>
        </button>
      </Col>
    </Row>
  </Container>
);

export default Directory;
