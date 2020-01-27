import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

class AvenueRequestForm extends Component {

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

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.postRequest(this.state);
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
    )
  }
}

export default AvenueRequestForm
