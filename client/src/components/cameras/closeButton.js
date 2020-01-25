import React from 'react';

const CloseButton = props => {
  return (
    <div>
      <button onClick={props.close}>X</button>
    </div>
  );
};

export default CloseButton;
