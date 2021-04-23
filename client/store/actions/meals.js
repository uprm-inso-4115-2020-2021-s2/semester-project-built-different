import axios from 'axios';
import { mealTypes } from './types';

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

/*
Func: getMeals
*/
export const getMeals = () => async (
    dispatch
) => {
    try {
        const res = await axios.get(`http://localhost:5000/api/meals`);
        dispatch({type: MEALS_GET_SUCCESS, payload: res.data })
    } catch (err) {
        dispatch({ type: MEALS_GET_SUCCESS, payload: err });
    }
}
/*
Func: login or signin
  @Params
    meal: meal
      meal: addMeal;
*/
export const addMeal = meal => async (
    dispatch
) => {
    const {
        name,
        price,
        comments,
        available
    } = meal;
    try {
        const res = await axios.post(
            `http://localhost:5000/api/meal/add`,
            {
                name,
                price,
                comments,
                available
            },
        );

        dispatch({ type: MEALS_ADD_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: MEALS_ADD_ERROR, payload: err });
    }
}

// export const updateMeal = meal => async (
//     dispatch
// ) => {
//     const {

//     } = meal;
//     try {
        
//     } catch (error) {
        
//     }
// }