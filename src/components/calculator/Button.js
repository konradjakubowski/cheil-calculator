import React from 'react';
import { specialOperators, delOperator } from '../../utilities/keypadKeys';

export default ({ onButtonClick, buttonKey }) => {
  const handleClick = (e) => { onButtonClick(e.target.textContent); };
  const classNames = [
    'keypad--btn',
    specialOperators.includes(buttonKey) ? 'keypad--btn-gray' : '',
    delOperator.includes(buttonKey) ? 'keypad--btn-del' : '',
  ];

  return (
    <button
      type="button"
      name={buttonKey}
      className={classNames.join(' ').trim()}
      onClick={handleClick}
    >
      { buttonKey }
    </button>
  );
};
