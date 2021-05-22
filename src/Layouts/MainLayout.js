import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = (props) => (
  <div>
    <Header {...props} />
    <div className="main my-1">
      { props.children }
    </div>
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainLayout;
