import React, { Component } from 'react'
import AvenueOptions from '../components/header/AvenueOptions.js';
import ResetButton from '../components/header/ResetButton.js';
import { connect } from 'react-redux'

class HeaderContainer extends Component {

  constructor(props){
    super(props)
    this.state = { avenues: [] }
  }

  handleOnClick = event => {
    this.props.reset()
  }

  render() {
    return (
      <div>
        <AvenueOptions avenues={this.state.avenues} getCameras={this.props.getCameras} getAllCameras={this.props.getAllCameras} />
        <ResetButton reset={this.handleOnClick} />
      </div>
    )
  }

  componentDidMount(){
     fetch('/avenues')
       .then(response => response.json())
       .then(data => {
         this.setState({
           avenues: data
         })
       })
  }

}

const mapDispatchToProps = dispatch => ({
  getCameras: (avenue) => dispatch({ type: "GET_CAMERAS", avenue}),
  reset: () => dispatch({ type: "RESET"})
})

export default connect(null, mapDispatchToProps)(HeaderContainer)
