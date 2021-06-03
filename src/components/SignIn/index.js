import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Forms/Button';
import { signInWithGoogle, auth } from '../../Firebase/utils';
import FormInput from '../Forms/FormInput';
import AuthWrapper from '../AuthWrapper';
import './style.scss';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

  const resetForm = () => {
    setEmail('');
    setPassword('');
  }

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// try to signin with provided email and password
			await auth.signInWithEmailAndPassword(email, password);
			// reset the form
      resetForm();
		} catch (error) {
			// console.log(error);
		}
	};

	const configAuthWrapper = {
		headline: 'LogIn',
	};

	return (
		<AuthWrapper {...configAuthWrapper}>
			<div className="formWrap">
				<form onSubmit={handleSubmit}>
					<FormInput
						type="emial"
						value={email}
						name="email"
						handleChange={e => setEmail(e.target.value)}
						placeholder="email address"
					/>
					<FormInput
						type="password"
						value={password}
						name="password"
						handleChange={e => setPassword(e.target.value)}
						placeholder="password"
					/>
					<Button type="submit">Login</Button>
					<div className="socialSignin">
						<div className="">
							<Button onClick={signInWithGoogle}>Sign in with Google</Button>
						</div>
					</div>
					<div className="links">
						<Link to="/recovery">Reset Password</Link>
					</div>
				</form>
			</div>
		</AuthWrapper>
	);
};

export default SignIn;
