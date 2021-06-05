import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Button from '../Forms/Button';
import FormInput from '../Forms/FormInput';
import AuthWrapper from '../AuthWrapper';
import { emailSignInStart, signInWithGoogle, resetAllAuthForms } from './../../redux/Users/user.actions';
import './style.scss';

const mapState = ({ user }) => ({
	currentUser: user.currentUser,
});

const SignIn = (props) => {
	const dispatch = useDispatch();
	const { currentUser } = useSelector(mapState);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const resetForm = () => {
		setEmail('');
		setPassword('');
	};

	useEffect(() => {
		if(currentUser) {
			resetForm();
			dispatch(resetAllAuthForms())
			props.history.push('/');
		}
	}, [currentUser]);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(emailSignInStart({email, password}));
	};

	const handleGoogleSignIn =() => {
		dispatch(signInWithGoogle());
	}

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
						handleChange={(e) => setEmail(e.target.value)}
						placeholder="email address"
					/>
					<FormInput
						type="password"
						value={password}
						name="password"
						handleChange={(e) => setPassword(e.target.value)}
						placeholder="password"
					/>
					<Button type="submit">Login</Button>
					<div className="socialSignin">
						<div className="">
							<Button onClick={handleGoogleSignIn}>Sign in with Google</Button>
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

export default withRouter(SignIn);
