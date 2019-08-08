import React, { Component } from "react";
import { keypadKeys } from "../../utilities/keypadKeys";
import Calculator from "../calculator";

export default class Keypad extends Component {
  handleClick = key => {
    switch (key) {
      case "C":
        this.props.clear();
        break;
      case "+/-":
        this.props.opposite();
        break;
      case "%":
        this.props.percentage();
        break;    
      case "DEL":
        this.props.delete();
        break;
      case "=":
        this.props.evaluate();
        break;
      default:
        this.props.calculate(key);
        break;
    }
  };
  render() {
    return (
      <div className="container--keypad">
        {keypadKeys.map((row, idx) => {
          return (
            <div key={idx} className="container--keypad-row">
              {row.map(key => (
                <Calculator.Button
                  key={key}
                  onButtonClick={this.handleClick}
                  buttonKey={key}
                />
              ))}
            </div>
          );
        })}
      </div>
    );
  }
}
