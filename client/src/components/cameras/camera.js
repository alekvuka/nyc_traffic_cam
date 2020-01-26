import React, { Component } from 'react'
import Description from './Description.js'
import CloseButton from './CloseButton.js'
import Image from './Image.js'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import DisplayAlert from '../header/DisplayAlert.js'

class Camera extends Component {

  sendAlert = () => {
  return  <DisplayAlert />
  }

  render() {
    return (
      <Jumbotron>
           <Description text={this.props.description} />
           <CloseButton removeCam={this.props.removeCam} id={this.props.url} sendAlert={this.sendAlert} />
           <Image url={this.props.url} desc={this.props.description} />
     </Jumbotron>
    )
  }
}

export default Camera
