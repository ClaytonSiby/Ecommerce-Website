import React, { Component } from 'react'
import FormInput from './../Forms/FormInput'
import Button from './../Forms/Button'

import { auth, handleUserProfile } from './../../Firebase/utils'
import './styles.scss'

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
  errors: []
}

class SignUp extends Component {
  constructor (props) {
    super(props)

    this.state = {
      ...initialState
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if(password !== confirmPassword) {
      const err = ['Passwords Don\'t match'];

      this.setState({
        errors: err
      })
      return;
    }

    try {
      // create new user with their password and email address
      const { user } = auth.createUserWithEmailAndPassword(email, password);

      // pass additional attributes for the newly created user object ( displayName )
      await handleUserProfile(user, { displayName })
      this.setState({
        ...initialState
      })

    } catch(error) {
      // console.log(error);
    }
  }

  render () {
    const { displayName, email, password, confirmPassword, errors } = this.state
    return (
      <div className='signup'>
        <div className='wrap'>
          <h2>SignUp</h2>

          {
            errors.length > 0 && (
              <ul>
                {
                  errors.map((error, index) => {
                    return (
                      <li key={index}>{ error }</li>
                    )
                  })
                }
              </ul>
            )
          }
          <div className="formWrap">
          <form onSubmit = { this.handleFormSubmit }>
            <FormInput
              type='text'
              name='displayName'
              value={displayName}
              onChange={this.handleChange}
              placeholder='Full Name'
            />

            <FormInput
              type='email'
              name='email'
              value={email}
              onChange={this.handleChange}
              placeholder='Email Address'
            />

            <FormInput
              type='password'
              name='password'
              value={password}
              onChange={this.handleChange}
              placeholder='********'
            />

            <FormInput
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={this.handleChange}
              placeholder='********'
            />

            <Button type="submit">
              Register
            </Button>
          </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp
