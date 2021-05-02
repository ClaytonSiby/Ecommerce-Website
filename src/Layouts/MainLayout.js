import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    <div className="main">
      { children }
    </div>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainLayout;
