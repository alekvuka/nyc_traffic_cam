
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import React, { Component } from 'react';

class InputForm extends Component {

  constructor(props){
    super(props)
    this.state ={
      request: "",
      email: ""
    }
  }

  updateSubmission = (event) => {
    if(event.target.id === "email"){
      this.setState({
        ...this.state,
        email: event.target.value
      })
    }else{
      this.setState({
        ...this.state,
        request: event.target.value
      })
    }
  }


  render() {
  return (
    <Form>
      <Form.Group >
        <Form.Label>Enter your email </Form.Label>
        <Form.Control id="email" onChange={this.updateSubmission} placeholder="email" />
      </Form.Group>
      <Form.Group >
        <Form.Label>Enter your avenue request</Form.Label>
        <Form.Control id="request" onChange={this.updateSubmission} placeholder="avenue" />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
   </Form>
 );
}

};

export default InputForm;
