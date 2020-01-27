import React, { Component } from 'react'
import Description from './Description.js'
import CloseButton from './CloseButton.js'
import Image from './Image.js'
import Jumbotron from 'react-bootstrap/Jumbotron'

class Camera extends Component {

  render() {
    return (
      <Jumbotron>
           <Description text={this.props.description} />
           <CloseButton text={this.props.description} closureAlert={this.sendAlert} removeCam={this.props.removeCam} id={this.props.url} sendAlert={this.props.displayAlert} />
           <Image url={this.props.url} desc={this.props.description} />
     </Jumbotron>
    )
  }
}

export default Camera
