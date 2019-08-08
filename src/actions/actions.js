import * as types from '../store/types';

export const calculate = (key) => {
  return {
    type: types.SET_EXPRESSION,
    payload: key,
  };
};

export const clear = () => {
  return {
    type: types.CLEAR_EXPRESSION,
  };
};

export const deleteLastEntry = () => {
  return {
    type: types.DELETE_LAST_EXPRESSION_ENTRY,
  };
};

export const evaluateExpression = () => {
  return {
    type: types.EVALUATE_EXPRESSION,
  };
};

export const oppositeExpression = () => {
  return {
    type: types.OPPOSITE_EXPRESSION,
  };
};

export const percentageExpression = () => {
  return {
    type: types.PERCENTAGE_EXPRESSION,
  };
};
