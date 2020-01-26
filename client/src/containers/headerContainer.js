import React, { Component } from 'react'
import AvenueOptions from '../components/header/AvenueOptions.js';
import ResetButton from '../components/header/ResetButton.js';
import { connect } from 'react-redux'
import { fetchAvenues } from '../actions/avenueActions'
import { fetchCameras } from '../actions/cameraActions'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import RequestButton from '../components/header/RequestButton.js'
import { postRequest } from '../actions/requestActions'
import InputForm from '../components/header/InputForm.js'
import DisplayAlert from '../components/header/DisplayAlert.js'

class HeaderContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      displayInputForm: false
    }
  }

  handleOnClick = event => {
    this.props.reset()
    this.setState({
      displayInputForm: false
    })
    return(<div><InputForm /></div>)
  }

  checkDisplayInputForm = () => {
    if(this.state.displayInputForm === true){
      this.props.reset()
      return <InputForm requestSent={this.props.requestSent} requestCreated={this.props.requestCreated} postRequest={this.props.postRequest} displayInputForm={this.changeDisplayInputForm} />
    }
  }

  changeDisplayInputForm = () => {
    this.setState({
      displayInputForm: !this.state.displayInputForm
    })
  }

  checkAlert = () => {
    if(this.props.requestSent===true){
      const txt = `Your request for ${this.props.requestCreated.text} was sucsefully submitted!`
      return <DisplayAlert text={txt} />
    }
  }

  render() {
    return (
      <div>
        <ButtonToolbar>
          <AvenueOptions avenues={this.props.avenues} fetchCameras={this.props.fetchCameras} />
          <ResetButton reset={this.handleOnClick} />
          <RequestButton displayInputForm={this.changeDisplayInputForm}/>
        </ButtonToolbar>
        {this.checkDisplayInputForm()}
        {this.checkAlert()}
      </div>
    )
  }

  componentDidMount(){
     this.props.fetchAvenues()
  }
}

const mapStateToProps = state => {
  return {
    avenues: state.avenues,
    requestSent: state.requestSent,
    requestCreated: state.requestCreated
  }
}


const mapDispatchToProps = dispatch => ({
  fetchCameras: (avenue) => dispatch(fetchCameras(avenue)),
  reset: () => dispatch({ type: "RESET"}),
  fetchAvenues: () => dispatch(fetchAvenues()),
  postRequest: (request) => dispatch(postRequest(request))
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
