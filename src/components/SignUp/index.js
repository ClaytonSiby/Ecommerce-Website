import React, { Component } from 'react'
import FormInput from './../Forms/FormInput'
import Button from './../Forms/Button'
import './styles.scss'

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
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

  render () {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className='signup'>
        <div className='wrap'>
          <h2>SignUp</h2>
          <div className="formWrap">
          <form>
            <FormInput
              type='text'
              name='displayName'
              value={displayName}
              onChange={this.handleChange}
              placeholder='Full Name'
            />

            <FormInput
              type='email'
              name='password'
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
              name='password'
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
