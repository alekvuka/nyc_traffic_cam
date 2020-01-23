import React, { Component } from 'react'
import avenueOptions from '../components/header/avenueOptions.js';
import resetButton form '../components/header/resetButton.js';
import { connect } from 'react-redux'

class HeaderContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
