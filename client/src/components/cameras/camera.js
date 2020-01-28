import React, { Component } from 'react'
import Description from './Description.js'
import CloseButton from './CloseButton.js'
import Image from './Image.js'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Favorite from './Favorite.js'
class Camera extends Component {

  render() {
    return (
      <Jumbotron>
           <Description text={this.props.description} />
           <CloseButton text={this.props.description} variant={this.props.variant} closeCam={this.props.closeCam} camera={this.props}  />
           <Image url={this.props.url} desc={this.props.description} />
     </Jumbotron>
    )
  }
}

//<Favorite />
export default Camera
