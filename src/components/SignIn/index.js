import React, { Component } from 'react';
import Button from './../Forms/Button';
import { signInWithGoogle } from './../../Firebase/utils';
import './style.scss';

class SignIn extends Component {
    handleSubmit = async e => {
        e.preventDefault();
    }
    render() {
        return (
            <div className="signIn">
                <div className="wrap">
                    <h2>LogIn</h2>
    
                    <div className="formWrap">
                        <form onSubmit={ this.handleSubmit }>
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
