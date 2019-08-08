import mainReducer from '../reducers/mainReducer';
import * as types from '../store/types';

describe('Calculator Reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      expression: '',
      total: 0,
    };
    expect(mainReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle SET_EXPRESSION', () => {
    let expected = {
      expression: '2*2',
      total: 4,
    };
    let action = {
      type: types.SET_EXPRESSION,
      payload: '2*2',
    };
    expect(mainReducer(undefined, action)).toEqual(expected);
    expected = {
      expression: '0*',
      total: 0,
    };
    action = {
      type: types.SET_EXPRESSION,
      payload: '*',
    };
    expect(mainReducer(undefined, action)).toEqual(expected);
    expected = {
      expression: '0/',
      total: 0,
    };
    action = {
      type: types.SET_EXPRESSION,
      payload: '/',
    };
    expect(mainReducer(undefined, action)).toEqual(expected);
    expected = {
      expression: '0+',
      total: 0,
    };
    action = {
      type: types.SET_EXPRESSION,
      payload: '+',
    };
    expect(mainReducer(undefined, action)).toEqual(expected);
  });
  it('should handle CLEAR_EXPRESSION', () => {
    const expected = {
      expression: '',
      total: 0,
    };
    const initialState = {
      expression: '4*5',
      total: 25,
    };
    const action = {
      type: types.CLEAR_EXPRESSION,
    };
    expect(mainReducer(initialState, action)).toEqual(expected);
  });
  it('should handle DELETE_LAST_EXPRESSION_ENTRY', () => {
    const expected = {
      expression: '4*5*',
      total: 20,
    };
    const initialState = {
      expression: '4*5*6',
      total: 120,
    };
    const action = {
      type: types.DELETE_LAST_EXPRESSION_ENTRY,
    };
    expect(mainReducer(initialState, action)).toEqual(expected);
  });
  it('should handle EVALUATE_EXPRESSION', () => {
    const expected = {
      expression: '',
      total: 120,
    };
    const initialState = {
      expression: '4*5*6',
      total: 120,
    };
    const action = {
      type: types.EVALUATE_EXPRESSION,
    };
    expect(mainReducer(initialState, action)).toEqual(expected);
  });
});
