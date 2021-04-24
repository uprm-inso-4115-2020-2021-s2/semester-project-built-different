import { createSelector } from 'reselect';

const selectMeal = (state) => state.meal || {};

export const selectMeals = createSelector(
  selectMeal,
  (meal) => meal.meals,
);

export const selectError = createSelector(
  selectMeal,
  (meal) => meal.error,
);
