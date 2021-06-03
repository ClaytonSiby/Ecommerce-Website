import React, { useState } from 'react';

// give history stored in react-router
import { withRouter } from 'react-router-dom';
import './styles.scss';

import AuthWrapper from '../AuthWrapper';
import FormInput from '../Forms/FormInput';
import Button from '../Forms/Button';

import { auth } from '../../Firebase/utils';

const EmailPassword = (props) => {
	const [email, setEmail] = useState('');
	const [errors, setErrors] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// redirect to this url once done reseting password
			const config = {
				url: 'http://localhost:3000/login',
			};

			await auth
				.sendPasswordResetEmail(email, config)
				.then(() => {
					// redirect user to the login page if they provide a valid email address
					props.history.push('/login');
				})
				.catch(() => {
					const err = ['Email not found. Please try again'];

					setErrors(err);
				});
		} catch (error) {
			// console.log(error);
		}
	};

	const configAuthWrapper = {
		headline: 'Email Password',
	};

	return (
		<AuthWrapper {...configAuthWrapper}>
			{errors.length > 0 && (
				<ul>
					{errors.map((error, index) => (
						<li key={index}>{error} </li>
					))}
				</ul>
			)}
			<div className="formWrap">
				<form onSubmit={handleSubmit}>
					<FormInput
						type="email"
						name="email"
						value={email}
						placeholder="Email Address"
						handleChange={ e => setEmail(e.target.value)}
					/>

					<Button type="submit">Email Password</Button>
				</form>
			</div>
		</AuthWrapper>
	);
};

export default withRouter(EmailPassword);
