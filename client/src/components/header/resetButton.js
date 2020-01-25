import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ResetButton = props => {
  return (
      <Button variant="danger" onClick={props.reset}>reset</Button> 
  );
};

export default ResetButton;
