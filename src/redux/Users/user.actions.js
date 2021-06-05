import userTypes from './user.types';
import { auth, handleUserProfile, GoogleProvider } from '../../Firebase/utils';


export const emailSignInStart = userCredentials => ({
	type: userTypes.EMAIL_SIGN_IN_START,
	payload: userCredentials
})

export const signInSuccess = user => ({
	type: userTypes.SIGN_IN_SUCCESS,
	payload: user
})

export const checkUserSession = () => ({
	type: userTypes.CHECK_USER_SESSION,
})

export const signOutUserStart = () => ({
	type: userTypes.SIGN_OUT_USER_START
})

export const signOutUserSuccess = () => ({
	type: userTypes.SIGN_OUT_USER_SUCCESS
})












const setCurrentUser = (user) => ({
	type: userTypes.SET_CURRENT_USER,
	payload: user,
});

// const signInUser =
// 	({ email, password }) =>
// 	async (dispatch) => {
		
// 	};

const signUpUser =
	({ displayName, email, password, confirmPassword }) =>
	async (dispatch) => {
		if (password !== confirmPassword) {
			const err = ["Passwords Don't match"];
			dispatch({
				type: userTypes.SIGN_UP_ERROR,
				payload: err,
			});
			return;
		}

		try {
			// create new user with their password and email address
			const { user } = auth.createUserWithEmailAndPassword(email, password);

			// pass additional attributes for the newly created user object ( displayName )
			await handleUserProfile(user, { displayName });
			dispatch({
				type: userTypes.SIGN_UP_SUCCESS,
				payload: true,
			});
		} catch (error) {
			// console.log(error);
		}
	};

const resetPassword = ({ email }) => async (dispatch) => {
		const config = {
			url: 'http://localhost:3000/login',
		};
		try {
			// redirect to this url once done reseting password

			await auth
				.sendPasswordResetEmail(email, config)
				.then(() => {
					dispatch({
						type: userTypes.RESET_PASSWORD_SUCCESS,
						payload: true
					})
				})
				.catch(() => {
					const err = ['Email not found. Please try again'];
					dispatch({
						type: userTypes.RESET_PASSWORD_ERROR,
						payload: err
					})
				});
		} catch (error) {
			// console.log(error);
		}
	};


const signInWithGoogle = () => async dispatch => {
	try{
		await	auth.signInWithPopup(GoogleProvider)
		.then(() => {
			dispatch({
				type: userTypes.SIGN_IN_SUCCESS,
				payload: true,
			});
		})
	}
	catch(error) {
		// console.log(error)
	}

};

const resetAllAuthForms = () => ({
	type: userTypes.RESET_AUTH_FORMS
})

export { setCurrentUser, signUpUser, resetPassword, signInWithGoogle, resetAllAuthForms };

