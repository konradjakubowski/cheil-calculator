import React, { Component } from 'react';
import { connect } from 'react-redux';
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
