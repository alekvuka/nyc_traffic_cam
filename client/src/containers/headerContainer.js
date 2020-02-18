import React, { Component } from 'react'
import AvenueOptions from '../components/header/avenueOptions.js';
import ResetButton from '../components/header/ResetButton.js';
import { connect } from 'react-redux'
import { fetchAvenues } from '../actions/avenueActions'
import { fetchCameras } from '../actions/cameraActions'
import {reset} from '../actions/requestActions.js'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import RequestButton from '../components/header/RequestButton.js'

class HeaderContainer extends Component {

  render() {
    return (
      <div>
        <ButtonToolbar>
          <AvenueOptions avenues={this.props.avenues} fetchCameras={this.props.fetchCameras} handleOptionClick={this.handleOptionClick}/>
          <ResetButton reset={this.handleOnClick} />
          <RequestButton displayInputForm={this.changeDisplayInputForm}/>
        </ButtonToolbar>
      </div>
    )
  }

  componentDidMount(){
    console.log("a")
     this.props.fetchAvenues()
     console.log("b")
  }
}

const mapStateToProps = state => {
  return {
    avenues: state.avenues,
    requestCreated: state.requestCreated
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCameras: (avenue) => dispatch(fetchCameras(avenue)),
  //reset: () => dispatch({ type: "RESET"}),
  reset: () => dispatch(reset()),
  fetchAvenues: () => dispatch(fetchAvenues()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
