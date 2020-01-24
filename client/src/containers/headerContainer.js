import React, { Component } from 'react'
import AvenueOptions from '../components/header/avenueOptions.js';
import ResetButton form '../components/header/ResetButton.js';
import { connect } from 'react-redux'

class HeaderContainer extends Component {



  render() {
    return (
      <div>
        <AvenueOptions addBand={this.props.addBand}/>
        <ResetButton bands={this.props.bands}/>
      </div>
    )
  }

}



const mapDispatchToProps = dispatch => ({
  getAvenues: () => dispatch({ type: "GET_AVENUES" }),
  reset: () => dispatch({type: reset})

})

export default connect(null, mapDispatchToProps)(HeaderContainer)
