import React, { Component } from 'react'
import './styles.scss'

import AuthWrapper from './../AuthWrapper'
import FormInput from './../Forms/FormInput'
import Button from './../Forms/Button'

const initialState = {
  email: ''
}

class EmailPassword extends Component {
  constructor (props) {
    super(props)

    this.state = {
      ...initialState
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    const { name, value } = event.target;

    this.setState({
        [name]: value
    })
  }

  handleSubmit = async e => {
    e.preventDefault();

    
  }

  render () {
    const configAuthWrapper = {
      headline: 'Email Password'
    }

    const { email } = this.state

    return (
      <AuthWrapper {...configAuthWrapper}>
        <div className='formWrap'>
          <form onSubmit={this.handleSubmit}>
            <FormInput
              type='email'
              name='email'
              value={email}
              placeholder='Email Address'
              onChange={this.handleChange}
            />

            <Button type="submit">Email Password</Button>
          </form>
        </div>
      </AuthWrapper>
    )
  }
}

export default EmailPassword
