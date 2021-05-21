import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomepageLayout = ({ children }) => (
  <div>
    <Header { ...props } />
    {children}
    <Footer />
  </div>
);

HomepageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default HomepageLayout;
