import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Spinner from 'react-bootstrap/Spinner'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Alert from 'react-bootstrap/Alert'
import React, { Component } from 'react'

class DisplayAlert extends Component {

  constructor(props){
    super()
    this.state = {
        userSaw: false
    }
  }

  resetSubmission = () => {
    this.setState({
      userSaw: true
    })
  }

  shouldDisplay = () => {
    if(this.state.userSaw===false){
      return (<Alert variant={'success'}>
          Your request for {this.props.text} was succesfully submitted!
      </Alert>)
    }

  }

  render(){
    return(
      <div>
        {this.shouldDisplay()}
      </div>
    )}

  componentDidMount(){
    this.timerID = setInterval(
      () => this.resetSubmission(),
      2000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID)
  }




};

export default DisplayAlert;
