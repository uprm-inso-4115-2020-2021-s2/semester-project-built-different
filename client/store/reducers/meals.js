import { mealTypes } from '../actions/types';

const {
    MEALS_ADD_SUCCESS,
    MEALS_ADD_ERROR,
    MEALS_REMOVE_SUCCESS,
    MEALS_REMOVE_ERROR,
    MEALS_UPDATE_SUCCESS,
    MEALS_UPDATE_ERROR,
    MEALS_GET_SUCCESS,
    MEALS_GET_ERROR
} = mealTypes;

const initialState = {
    meal: null,
    error: null,
};

const mealReducers = (state = initialState, action) => {
    switch (action.type) {
        case MEALS_ADD_SUCCESS: {
            return {
                ...state,
                meal: action.payload,
                error: null,
            }
        }
        case MEALS_ADD_ERROR: {
            return {
                ...state,
                error: action.payload,
            }
        }
        case MEALS_UPDATE_SUCCESS: {
            return {
                ...state,
                meal: action.payload,
                error: null,
            }
        }
        case MEALS_UPDATE_ERROR: {
            return {
                ...state,
                error: action.payload,
            }
        }
        case MEALS_REMOVE_SUCCESS: {
            return {
                ...state,
                meal: action.payload,
                error: null,
            }
        }
        case MEALS_REMOVE_ERROR: {
            return {
                ...state,
                error: action.payload,
            }
        }
        case MEALS_GET_SUCCESS: {
            return {
                ...state,
                meal: action.payload,
                error: null,
            }
        }
        case MEALS_GET_ERROR: {
            return {
                ...state,
                error: action.payload,
            }
        }
    }
}

export default mealReducers;