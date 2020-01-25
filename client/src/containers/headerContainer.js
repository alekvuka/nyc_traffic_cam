import React, { Component } from 'react'
import AvenueOptions from '../components/header/AvenueOptions.js';
import ResetButton from '../components/header/ResetButton.js';
import { connect } from 'react-redux'
import { fetchAvenues } from '../actions/avenueActions'
import { fetchCameras } from '../actions/cameraActions'

class HeaderContainer extends Component {

  handleOnClick = event => {
    this.props.reset()
  }

  render() {
    return (
      <div>
        <AvenueOptions avenues={this.props.avenues} fetchCameras={this.props.fetchCameras} getAllCameras={this.props.getAllCameras} />
        <ResetButton reset={this.handleOnClick} />
      </div>
    )
  }

  componentDidMount(){
     this.props.fetchAvenues()
  }
}

const mapStateToProps = state => {
  debugger 
  return {avenues: state.avenues}
}


const mapDispatchToProps = dispatch => ({
  fetchCameras: (avenue) => dispatch(fetchCameras(avenue)),
  reset: () => dispatch({ type: "RESET"}),
  fetchAvenues: () => dispatch(fetchAvenues())
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
