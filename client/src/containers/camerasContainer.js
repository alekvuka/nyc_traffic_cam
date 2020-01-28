import React, { Component } from 'react'
import Camera from '../components/cameras/Camera.js';
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
//import DisplayAlert from '../components/header/DisplayAlert.js'


class CamerasContainer extends Component {


  renderCameras = () => {
    const cams = this.props.cameras.map((camera, index) => {
       return <Camera key={index} description={camera.description} url={camera.url} removeCam={this.props.removeCam} displayAlert={this.displayClosureAlert} />
    })
    return cams
  }

  // displayClosureAlert = () => {
  //   return <DisplayAlert />
  // }

  render() {
    return (
      <Container fluid>
        {this.renderCameras()}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    cameras: state.cameras
  }
}

const mapDispatchToProps = dispatch => ({
  removeCam: (url) => dispatch({ type: "REMOVE_CAMERA", url})
})

export default connect(mapStateToProps, mapDispatchToProps)(CamerasContainer)
