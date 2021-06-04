import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FormInput from '../Forms/FormInput';
import Button from '../Forms/Button';
import AuthWrapper from '../AuthWrapper';
import { signUpUser } from './../../redux/Users/user.actions';
import './styles.scss';

const mapState = ({ user }) => ({
  signUpSuccess: user.signUpSuccess,
  signUpError: user.signUpErrors
})

const SignUp = (props) => {
  const dispatch = useDispatch();
  const {signUpSuccess, signUpError } = useSelector(mapState);
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  // resetting the form to null values.
  const resetForm = () => {
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors([]);
  }

  // when user signs up successfully
  useEffect(() => {
	if(signUpSuccess) {
		resetForm();
		props.history.push('/');
	}
  }, [signUpSuccess])

  // check if signing up returns an error.
  useEffect(() => {
	if(Array.isArray(signUpError) && signUpError.length > 0) {
		setErrors(signUpError)
	}
  }, [signUpError])

	const handleFormSubmit = (event) => {
		event.preventDefault();
		dispatch(signUpUser(
			{
				displayName, email, password, confirmPassword
			}
		))
	};

	const configAuthWrapper = {
		headline: 'SignUp',
	};

	return (
		<AuthWrapper {...configAuthWrapper}>
			<div className="formWrap">
				{errors.length > 0 && (
					<ul>
						{errors.map((error, index) => (
							<li key={index}>{error}</li>
						))}
					</ul>
				)}
				<form onSubmit={handleFormSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						handleChange={e => setDisplayName(e.target.value)}
						placeholder="Full Name"
					/>

					<FormInput
						type="email"
						name="email"
						value={email}
						handleChange={e => setEmail(e.target.value)}
						placeholder="Email Address"
					/>

					<FormInput
						type="password"
						name="password"
						value={password}
						handleChange={e => setPassword(e.target.value)}
						placeholder="********"
					/>

					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						handleChange={e => setConfirmPassword(e.target.value)}
						placeholder="********"
					/>

					<Button type="submit">Register</Button>
				</form>
			</div>
		</AuthWrapper>
	);
};

export default withRouter(SignUp);
