import Alert from 'react-bootstrap/Alert'
import React, { Component } from 'react'

class DisplayAlert extends Component {

  actionsAfterTimeout = () => {
    this.props.redirect()
  }

  render(){
    return(
      <div>
        <Alert variant={'warning'}> {this.props.text}</Alert>
      </div>
    )}

  componentDidMount(){
    this.timerID = setInterval(
       this.actionsAfterTimeout,
       2000
     );
  }

  componentWillUnmount(){
    clearInterval(this.timerID)
  }
};

export default DisplayAlert;
