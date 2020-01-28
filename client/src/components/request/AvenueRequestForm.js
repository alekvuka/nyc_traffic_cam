import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

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
          <Card bg="light" text="white" style={{ width: '36em' }}>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">email -> </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="email" onChange={this.handleOnChange} placeholder="" aria-label="Username" aria-describedby="basic-addon1"/>
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Ave. Request -> </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="request" onChange={this.handleOnChange} placeholder="" aria-label="Username" aria-describedby="basic-addon1"/>
            </InputGroup>

            <Button variant="warning" type="submit" onClick={(event) => this.handleOnSubmit(event)}>Send Request</Button>

          </Card>
      </Container>
  )}
}

export default AvenueRequestForm
