import React from 'react';

const ResetButton = props => {

  return (
    <div>
      <button onClick={props.reset()}>reset</button>
    </div>
  );

};

export default ResetButton;
