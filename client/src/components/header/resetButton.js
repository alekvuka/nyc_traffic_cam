import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Spinner from 'react-bootstrap/Spinner'
import { NavLink } from 'react-router-dom';

const ResetButton = props => {
  return (
    <ButtonGroup>
      <NavLink to="/"><Button variant="danger" onClick={props.reset}>reset</Button></NavLink>
    </ButtonGroup>
  );
};

export default ResetButton;
