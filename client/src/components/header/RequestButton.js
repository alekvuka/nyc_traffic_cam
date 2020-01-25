import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Spinner from 'react-bootstrap/Spinner'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const RequestButton = props => {
  return (
    <Button variant="warning" onClick={props.postRequest}>request new avenues</Button>
  );
};

export default RequestButton;
