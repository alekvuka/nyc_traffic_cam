import React, { Component } from 'react'
import Description from './Description.js'
import CloseButton from './CloseButton.js'
import Image from './Image.js'
import Jumbotron from 'react-bootstrap/Jumbotron'



class Favorite extends Component {

  state = {
    clicked: false
  }

  clicked = () => {
    this.setState((state) => {
      return {clicked: !state.clicked }
    })
  }

  render() {
    return (
      <button onClick={this.clicked}>{this.state.clicked ? "Favorite" : "Not Favorite"}</button>
    )
  }
}

export default Favorite
