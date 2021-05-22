import React, { Component } from 'react';
import Button from './../Forms/Button';
import { signInWithGoogle, auth } from './../../Firebase/utils';
import FormInput from './../Forms/FormInput';
import './style.scss';

const initialState = {
    email: '',
    password: ''
}

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...initialState
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;

        try {

            // try to signin with provided email and password
            await auth.signInWithEmailAndPassword(email, password);

            // reset the form

            this.setState({
                ...initialState
            })

        } catch(error) {
            // console.log(error);
        }
    }

    handleChange(e) {
      const { value, name } = e.target;

      this.setState({
          [name]: value
      })
    }

    render() {
        const { email, password } = this.state;
        return (
            <div className="signIn">
                <div className="wrap">
                    <h2>LogIn</h2>
    
                    <div className="formWrap">
                        <form onSubmit={ this.handleSubmit }>
                            <FormInput type="emial" value={email} name="email" onChange={ this.handleChange } placeholder="email address" />
                            <FormInput type="password" value={password} name="password" onChange={ this.handleChange } placeholder="password" />
                            <Button type="submit">Login</Button>
                            <div className="socialSignin">
                                <div className="row my-2">
                                    <Button onClick={signInWithGoogle}>Sign in with Google</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;
