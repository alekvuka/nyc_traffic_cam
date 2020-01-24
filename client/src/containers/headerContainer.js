import React, { Component } from 'react'
import AvenueOptions from '../components/header/AvenueOptions.js';
import ResetButton from '../components/header/ResetButton.js';
import { connect } from 'react-redux'

class HeaderContainer extends Component {

  constructor(props){
    super(props)
    this.state = { avenues: [] }
  }


  render() {
    return (
      <div>
        <AvenueOptions getAvenues={this.props.clickedOption} getCameras={this.props.getCameras} getAllCameras={this.props.getAllCameras} />
        <ResetButton reset={this.props.reset} />
      </div>
    )
  }

  componentDidMount(){
    //debugger
     fetch('/avenues')
       .then(response => response.json())
       .then(data => {
         this.setState({
           avenues: data.avenues
         })
       })
  }



}

const mapDispatchToProps = dispatch => ({
  getAvenues: () => dispatch({ type: "GET_AVENUES" }),
  getCameras: (avenue) => dispatch({type: "GET_AVENUE", avenue}),
  getAllCameras: () => dispatch({ type: "GET_ALL_CAMERAS"}),
  reset: () => dispatch({type: "RESET"})
})

export default connect(null, mapDispatchToProps)(HeaderContainer)
