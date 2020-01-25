import React from 'react';
import Button from 'react-bootstrap/Button';

const CloseButton = props => {

  return (
      <Button variant="danger" onClick={() => props.removeCam(props.id)}>X</Button>
  );
};

export default CloseButton;
