import React, { Component } from 'react'
import Camera from '../components/cameras/Camera.js';
import { connect } from 'react-redux'

class CamerasContainer extends Component {

  handleOnClick = event => {
    this.props.reset()
  }

  renderCameras = () => {
    const cams = this.props.cameras.map((camera, index) => {
       return <Camera key={index} description={camera.description} url={camera.url} close={this.props.removeCam} />
    })
    return cams
  }

  render() {
    return (
      <div>
      {this.renderCameras()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cameras: state.cameras
  }
}

const mapDispatchToProps = dispatch => ({
  removeCam: (id) => dispatch({ type: "REMOVE_CAMERA", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(CamerasContainer)
