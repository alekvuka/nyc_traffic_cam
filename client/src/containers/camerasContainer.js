import React, { Component } from 'react'
import Camera from '../components/cameras/camera.js';
import { connect } from 'react-redux'

class CamerasContainer extends Component {

  handleOnClick = event => {
    this.props.reset()
  }

  render() {
    return (
      <div>

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
