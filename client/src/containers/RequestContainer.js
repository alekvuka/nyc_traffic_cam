import React, { Component } from 'react';
import { connect } from 'react-redux'
import { postRequest } from '../actions/requestActions'
import AvenueRequestForm from '../components/request/AvenueRequestForm.js'
import DisplayAlert from '../components/DisplayAlert.js'
import { Redirect } from "react-router";

class Request extends Component {

  constructor(props){
    super(props)
    this.state = {
      redirect: false
    }
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  checkRedirect = () => {
    if(this.state.redirect){
      this.props.requestAlertSeen(true)
      return <Redirect to="/" />
    }
  }

  checkAlert = () => {
    if(this.props.requestCreated){
      const txt = `Your request for ${this.props.requestCreated.text} was sucsefully submitted!`
      return  (<div><DisplayAlert text={txt} variant="warning" redirect={this.setRedirect}/> </div> )
    }
  }

  render() {
        return (
          <div>
          {this.checkAlert()}
          <AvenueRequestForm postRequest={this.props.postRequest}/>
          {this.checkRedirect()}
          </div>
       )}
};

const mapStateToProps = state => ({
  requestCreated: state.requestCreated
})

const mapDispatchToProps = dispatch => ({
  postRequest: (request) => dispatch(postRequest(request)),
  requestAlertSeen: (bol) => dispatch ({type: "REQUEST_ALERT_SEEN", action: bol}),
})

export default connect(mapStateToProps, mapDispatchToProps)(Request)
