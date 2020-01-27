import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Spinner from 'react-bootstrap/Spinner'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { NavLink } from 'react-router-dom';

const RequestButton = props => {


  return (
    <NavLink to="/request"><Button variant="warning" onClick={props.displayInputForm}>request new avenues</Button></NavLink>
  );
};

export default RequestButton;
