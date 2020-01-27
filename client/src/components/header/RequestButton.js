import React from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const RequestButton = props => {


  return (
    <NavLink to="/request"><Button variant="warning" onClick={props.displayInputForm}>request new avenues</Button></NavLink>
  );
};

export default RequestButton;
