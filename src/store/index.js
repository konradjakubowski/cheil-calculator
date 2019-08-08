import { createStore, combineReducers } from 'redux';
import mainReducer from '../reducers/mainReducer';

const rootReducer = combineReducers({
  calculator: mainReducer,
});

export default createStore(rootReducer);

export const getExpression = state => state.calculator.expression;

export const getTotal = state => state.calculator.total;
