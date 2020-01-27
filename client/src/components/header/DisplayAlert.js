import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Spinner from 'react-bootstrap/Spinner'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Alert from 'react-bootstrap/Alert'
import React, { Component } from 'react'
import { useHistory } from "react-router-dom";
import { Redirect, Route, Switch } from "react-router";

class DisplayAlert extends Component {
  //
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
    //const history = useHistory()
    //this.props.history.push("/")
    //history.pushState('/')
    //window.history.pushState({hello: ""}, '', '/')

  }

  shouldDisplay = () => {
    //if(this.state.userSaw===false){
      return(
        <div>
        <Alert variant={'warning'}>
          {this.props.text}
       </Alert>

       </div>
     )
    //}
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
