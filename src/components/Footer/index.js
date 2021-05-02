import React from 'react';
import { Container } from 'react-bootstrap';
import './style.scss'

const Footer = () => {
  return (
    <Container className="py-2">
      <footer className='footer'>
        <div className='wrap'>&copy;faith&amp;trush 2021</div>
      </footer>
    </Container>
  )
}

export default Footer
