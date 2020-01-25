import React from 'react';

const CloseButton = props => {

  //const ids = props.id

  //debugger

  return (
    <div>
      <button onClick={() => props.removeCam(props.id)}>X</button>
    </div>
  );
};

export default CloseButton;
