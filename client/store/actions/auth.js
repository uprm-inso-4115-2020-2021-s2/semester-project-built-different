import axios from 'axios';
import { authTypes } from './types';

const { AUTHENTICATION_SUCCESS, AUTHENTICATION_ERROR } = authTypes;

/*
Func: login or signin
  @Params
    credentials: user
      credentials: login| signup;
*/
export const initSession = (credentials, type) => async (
  dispatch,
) => {
  const { name, email, password } = credentials;
  try {
    const res = await axios.post(
      `http://localhost:5000/api/users/${type}`,
      {
        name,
        email,
        password,
      },
    );

    dispatch({ type: AUTHENTICATION_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTHENTICATION_ERROR, payload: err });
  }
};

export const verifyAuth = () => async (dispatch) => {
  try {
    const res = await axios.get(
      'http://localhost:5000/api/users/auth',
    );

    dispatch({ type: AUTHENTICATION_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTHENTICATION_ERROR, payload: err });
  }
};

export const dummy = {};
