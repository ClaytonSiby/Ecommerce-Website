import userTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  signInSuccess: false,
  signUpSuccess: false,
  signUpErrors: []
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        signInSuccess: action.payload
      }

    case userTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpSuccess: action.payload
      }

    case userTypes.SIGN_UP_ERROR:
      return {
        ...state,
        signUpErrors: action.payload
      }
    default:
      return state;
  }
};

export default userReducer;
