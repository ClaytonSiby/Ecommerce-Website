import React, { Component } from 'react';

// give history stored in react-router
import { withRouter } from 'react-router-dom';
import './styles.scss';

import AuthWrapper from '../AuthWrapper';
import FormInput from '../Forms/FormInput';
import Button from '../Forms/Button';

import { auth } from '../../Firebase/utils';

const initialState = {
  email: '',
  errors: [],
};

class EmailPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { email } = this.state;

      // redirect to this url once done reseting password
      const config = {
        url: 'http://localhost:3000/login',
      };

      await auth.sendPasswordResetEmail(email, config)
        .then(() => {
          // redirect user to the login page if they provide a valid email address
          this.props.history.push('/login');
        })
        .catch(() => {
          const err = ['Email not found. Please try again'];

          this.setState({
            errors: err,
          });
        });
    } catch (error) {
      // console.log(error);
    }
  }

  render() {
    const configAuthWrapper = {
      headline: 'Email Password',
    };

    const { email, errors } = this.state;
    return (
      <AuthWrapper {...configAuthWrapper}>
        {
              errors.length > 0 && (
              <ul>
                { errors.map((error, index) => (
                  <li key={index}>
                    { error }
                    {' '}
                  </li>
                ))}
              </ul>
              )
          }
        <div className="formWrap">
          <form onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email Address"
              onChange={this.handleChange}
            />

            <Button type="submit">Email Password</Button>
          </form>
        </div>
      </AuthWrapper>
    );
  }
}

export default withRouter(EmailPassword);
