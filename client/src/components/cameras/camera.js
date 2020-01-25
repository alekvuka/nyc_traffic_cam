import React, { Component } from 'react'
import Description from './Description.js'
import CloseButton from './CloseButton.js'
import Image from './Image.js'

class Camera extends Component {


  render() {
    return (
      <div>
        <Description text={this.props.description} />
        <CloseButton close={this.props.close} />
        <Image image={this.props.image} />
      </div>
    )
  }

}

export default Camera
