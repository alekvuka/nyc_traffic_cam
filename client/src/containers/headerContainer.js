import React, { Component } from 'react'
import AvenueOptions from '../components/header/AvenueOptions.js';
import ResetButton from '../components/header/ResetButton.js';
import { connect } from 'react-redux'
import { fetchAvenues } from '../actions/avenueActions'
import { fetchCameras } from '../actions/cameraActions'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import RequestButton from '../components/header/RequestButton.js'
import { postRequest } from '../actions/requestActions'
//import DisplayAlert from '../components/header/DisplayAlert.js'
import { Redirect } from "react-router";

class HeaderContainer extends Component {

  // checkAlert = () => {
  //   if(this.props.requestSent===true){
  //     this.props.requestConfirmationSeen()
  //     const txt = `Your request for ${this.props.requestCreated.text} was sucsefully submitted!`
  //     return  (<div><DisplayAlert text={txt} /> <Redirect to="/" /> </div>)
  //   }
  // }

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

    //{this.checkAlert()}

  componentDidMount(){
     this.props.fetchAvenues()
  }
}

const mapStateToProps = state => {
  return {
    avenues: state.avenues,
    requestSent: state.requestSent,
    requestCreated: state.requestCreated,
    displayForm: state.displayInputForm
  }
}

const mapDispatchToProps = dispatch => ({
  requestConfirmationSeen: () => dispatch ({type: "REQUEST_CONFIRMATION_SEEN"}),
  fetchCameras: (avenue) => dispatch(fetchCameras(avenue)),
  reset: () => dispatch({ type: "RESET"}),
  fetchAvenues: () => dispatch(fetchAvenues()),
  postRequest: (request) => dispatch(postRequest(request))
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
