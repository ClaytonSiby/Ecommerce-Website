import React, { Component } from 'react';
import './styles.scss';

import AuthWrapper from './../AuthWrapper';
import FormInput from './../Forms/FormInput';
import Button from './../Forms/Button';

class EmailPassword extends Component {

    render() {

        const configAuthWrapper = {
            headline: 'Email Password'
        }
        return (
            <AuthWrapper { ...configAuthWrapper }>

            </AuthWrapper>
        );
    }
}

export default EmailPassword;
