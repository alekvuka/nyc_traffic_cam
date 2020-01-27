import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { postRequest } from '../actions/requestActions'
import AvenueRequestForm from '../components/request/AvenueRequestForm.js'

class InputForm extends Component {

  render() {
        return (
          <AvenueRequestForm postRequest={this.props.postRequest}/>
       )}
    };

const mapDispatchToProps = dispatch => ({
  postRequest: (request) => dispatch(postRequest(request))
})

export default connect(null, mapDispatchToProps)(InputForm)
