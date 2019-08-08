import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  calculate,
  clear,
  deleteLastEntry,
  evaluateExpression,
  oppositeExpression,
  percentageExpression,
} from './actions/actions';
import Calculator from './components/calculator';
import * as fromCalculator from './store';
import './sass/App.scss';

export class App extends Component {
  componentDidMount() {
    console.log('checked if calculator is mounted.');
  }

  render() {
    return (
      <div className="calc--container">
        <Calculator.Screen {...this.props} />
        <Calculator.Keypad {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expression: fromCalculator.getExpression(state),
    total: fromCalculator.getTotal(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    calculate: buttonKey => {
      dispatch(calculate(buttonKey));
    },
    delete: () => {
      dispatch(deleteLastEntry());
    },
    clear: () => {
      dispatch(clear());
    },
    evaluate: () => {
      dispatch(evaluateExpression());
    },
    opposite: () => {
      dispatch(oppositeExpression());
    },
    percentage: () => {
      dispatch(percentageExpression());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
