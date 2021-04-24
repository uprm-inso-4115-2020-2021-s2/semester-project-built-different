import { mealTypes } from '../actions/types';

const { MEALS_SUCCESS, MEALS_ERROR } = mealTypes;

const initialState = {
  meal: null,
  error: null,
};

const mealReducers = (state = initialState, action) => {
  switch (action.type) {
    case MEALS_SUCCESS: {
      return {
        ...state,
        meal: action.payload,
        error: null,
      };
    }
    case MEALS_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default mealReducers;
