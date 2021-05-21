import React from 'react';
import './styles.scss';

const Button = ({ children, ...otherProps }) => {
    return (
        <button className="btn bg-info" { ...otherProps }>
            { children }
        </button>
    )
}

export default Button
