import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

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
      <Container fluid>
          <Card bg="light" text="white" style={{ width: '50em' }}>
          <Form onSubmit={(event) => this.handleOnSubmit(event)}>
            <Form.Group >
              <Form.Label> </Form.Label>
              <Form.Control id="email" onChange={this.handleOnChange} placeholder="email" />
            </Form.Group>
            <Form.Group >
              <Form.Label></Form.Label>
              <Form.Control id="request" onChange={this.handleOnChange} placeholder="avenue" />
            </Form.Group>
            <Button variant="warning" type="submit">Submit</Button>
         </Form>
          </Card>
      </Container>
  )}
}

export default AvenueRequestForm
