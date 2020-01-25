import React, { Component } from 'react'
import Description from './Description.js'
import CloseButton from './CloseButton.js'
import Image from './Image.js'

class Camera extends Component {

  render() {
    return (
      <div>
        <Description text={this.props.description} />
        <CloseButton removeCam={this.props.removeCam} id={this.props.url} />
        <Image url={this.props.url} desc={this.props.description} />
      </div>
    )
  }
}

export default Camera
