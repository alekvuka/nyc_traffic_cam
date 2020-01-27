import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { postRequest } from '../actions/requestActions'
import { NavLink } from 'react-router-dom';

class InputForm extends Component {

  constructor(props){
    super(props)
    this.state ={
      request: "",
      email: ""
    }
  }

  handleOnChange = (event) => {
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

  // postSubmit = () => {
  //   this.props.postRequest(this.state);
  // }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.postRequest(this.state);
    //this.props.displayInputForm()
    this.setState({
      request: '',
      email: '',
    });
  }

  render() {
  return (
    <Form onSubmit={(event) => this.handleOnSubmit(event)}>
      <Form.Group >
        <Form.Label>Enter your email </Form.Label>
        <Form.Control id="email" onChange={this.handleOnChange} placeholder="email" />
      </Form.Group>
      <Form.Group >
        <Form.Label>Enter your avenue request</Form.Label>
        <Form.Control id="request" onChange={this.handleOnChange} placeholder="avenue" />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
   </Form>
 );
}

};

const mapDispatchToProps = dispatch => ({
  postRequest: (request) => dispatch(postRequest(request))
})

export default connect(null, mapDispatchToProps)(InputForm)
