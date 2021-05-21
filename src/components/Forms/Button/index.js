import React from 'react';
import styles from './styles.scss';

const Button = ({ children, ...otherProps }) => {
    return (
        <button className="btn" { ...otherProps }>
            { children }
        </button>
    )
}

export default Button
