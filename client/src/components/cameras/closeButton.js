import React from 'react';
import Button from 'react-bootstrap/Button';

const CloseButton = props => {

  return (
    <div>
      <Button className="fixed-right" bg="primary" onClick={() => props.removeCam(props.id)}>X</Button>
    </div>
  );
};

export default CloseButton;
