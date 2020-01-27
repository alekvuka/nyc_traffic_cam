import Alert from 'react-bootstrap/Alert'
import React, { Component } from 'react'

class DisplayAlert extends Component {

  constructor(props){
    super()
    this.state = {
        userSawAlert: false
    }
  }

  resetSubmission = () => {
    this.setState({
      userSaw: true
    })
  }

  shouldDisplay = () => {
    if(this.state.userSaw === false){
      debugger
      return <Alert variant={'warning'}> {this.props.text}</Alert>
    }else{
      return <div></div>
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
