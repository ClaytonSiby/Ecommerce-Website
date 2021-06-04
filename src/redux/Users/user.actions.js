import userTypes from './user.types';
import { auth } from '../../Firebase/utils';

const setCurrentUser = (user) => ({
	type: userTypes.SET_CURRENT_USER,
	payload: user,
});

const signInUser = ({ email, password }) => async (dispatch) => {
		try {
			// try to signin with provided email and password
			await auth.signInWithEmailAndPassword(email, password);
			dispatch({
				type: userTypes.SIGN_IN_SUCCESS,
				payload: true,
			});
			// reset the form
		} catch (error) {
			console.log(error);
		}
};

export { setCurrentUser, signInUser }
