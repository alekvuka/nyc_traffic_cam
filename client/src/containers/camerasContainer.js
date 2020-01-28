import React, { Component } from 'react'
import Camera from '../components/cameras/Camera.js';
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import DisplayAlert from '../components/DisplayAlert.js'
//import DisplayAlert from '../components/header/DisplayAlert.js'


class CamerasContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cameraDeleted: ""
    }
  }

  closeButtonClicked = (camera) => {
    this.props.removeCam(camera.url)
    this.setState({
      cameraDeleted: camera.description
    })
  }

  resetCameraDeleted = () => {
    this.setState({
      cameraDeleted: ""
    })
  }

  checkDeletionAlert = () => {
    if(this.state.cameraDeleted){
      const txt = `Removed camera ${this.state.cameraDeleted}!`
      return  (<DisplayAlert text={txt} redirect={this.resetCameraDeleted}/> )
    }
  }


  renderCameras = () => {
    const cams = this.props.cameras.map((camera, index) => {
       return <Camera key={index} description={camera.description} url={camera.url} closeCam={this.closeButtonClicked}  />
    })
    return cams
  }

  render() {
    return (
      <Container fluid>
        {this.checkDeletionAlert()}
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
