import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword, resetAllAuthForms } from './../../redux/Users/user.actions';
// give history stored in react-router
import { withRouter } from 'react-router-dom';
import './styles.scss';

import AuthWrapper from '../AuthWrapper';
import FormInput from '../Forms/FormInput';
import Button from '../Forms/Button';

const mapState = ({ user }) => ({
	resetPasswordSuccess: user.resetPasswordSuccess,
	resetPasswordError: user.resetPasswordError
})

const EmailPassword = (props) => {
	const { resetPasswordSuccess, resetPasswordError } = useSelector(mapState);
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [errors, setErrors] = useState([]);

	// redirect user to login page if reset password request is a success/valued
	useEffect(() => {
		if(resetPasswordSuccess) {
			dispatch(resetAllAuthForms())
			props.history.push('/login')
		}
	}, [resetPasswordSuccess])

	// does the the resetPassword contain any errors the set the errors array.
	useEffect(() => {
		if(Array.isArray(resetPasswordError) && resetPasswordError.length > 0) {
			setErrors(resetPasswordError);
		}
	}, [resetPasswordError])

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(resetPassword({ email }));
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
