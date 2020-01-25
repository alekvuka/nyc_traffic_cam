import React, { Component } from 'react'
import AvenueOptions from '../components/header/AvenueOptions.js';
import ResetButton from '../components/header/ResetButton.js';
import { connect } from 'react-redux'
import { fetchAvenues } from '../actions/avenueActions'

class HeaderContainer extends Component {

  handleOnClick = event => {
    this.props.reset()
  }

  render() {
    return (
      <div>
        <AvenueOptions avenues={this.props.avenues} getCameras={this.props.getCameras} getAllCameras={this.props.getAllCameras} />
        <ResetButton reset={this.handleOnClick} />
      </div>
    )
  }

  componentDidMount(){
     this.props.fetchAvenues()
  }
}

const mapStateToProps = state => {
  return {avenues: state.avenues}
}


const mapDispatchToProps = dispatch => ({
  getCameras: (avenue) => dispatch({ type: "ADD_CAMERAS", avenue}),
  reset: () => dispatch({ type: "RESET"}),
  fetchAvenues: () => dispatch(fetchAvenues())
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
