import React from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const ResetButton = props => {
  return (
      <NavLink to="/"><Button variant="danger" onClick={props.reset}>reset</Button></NavLink>
  );
};

export default ResetButton;
