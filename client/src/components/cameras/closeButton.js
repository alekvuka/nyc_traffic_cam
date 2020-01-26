import React from 'react';
import Button from 'react-bootstrap/Button';

const CloseButton = props => {

  const txt = props.text

  return (

    <div>
      <Button className="fixed-right" variant="danger" onClick={() => props.removeCam(props.id)}>X</Button>
    </div>
  );
};

export default CloseButton;
