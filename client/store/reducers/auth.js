import { authTypes } from '../actions/types';

const { AUTHENTICATION_SUCCESS, AUTHENTICATION_ERROR } = authTypes;
const initialState = {
  token: null,
  error: null,
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATION_SUCCESS: {
      return {
        ...state,
        token: action.payload,
        error: null,
      };
    }
    case AUTHENTICATION_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default authReducers;
