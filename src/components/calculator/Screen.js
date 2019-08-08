import React from 'react';
import { Textfit } from 'react-textfit';

export default (props) => {
  return (
    <div className="container--screen">
      <Textfit
        max={30}
        throttle={60}
        mode="single"
        className="container--screen-top"
      >
        <div className="screen--top-inside">
          { props.expression }
        </div>
      </Textfit>
      <Textfit
        max={55}
        mode="single"
        className="container--screen-bottom"
      >
        <div className="screen--bottom-inside">
          { props.total }
        </div>
      </Textfit>
    </div>
  );
};
