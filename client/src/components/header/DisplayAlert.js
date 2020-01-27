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

  // shouldDisplay = () => {
  //   if(this.state.userSaw === false){
  //     debugger
  //     return
  //   }else{
  //     return <div></div>
  //   }
  // }

  render(){
    return(
      <div>
      <Alert variant={'warning'}> {this.props.text}</Alert>

      </div>
    )}

  componentDidMount(){
    // this.timerID = window.setTimeout(
    //   () => this.setState({userSaw: false}),
    //   2000
    // );
  }

  componentWillUnmount(){
    //clearInterval(this.timerID)
  }
};

export default DisplayAlert;
