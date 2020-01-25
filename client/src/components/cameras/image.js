import React, { Component } from 'react'
//import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card'

class Image extends Component {

  constructor(props){
    super(props)
    this.state = {
      url: props.url + Math.random()
    }
  }

  updateImage = () => {
        this.setState({
          url: this.props.url + Math.random()
        })
    }


  componentDidMount() {
    this.timerID = setInterval(
      () => this.updateImage(),
      1000
    );

  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }


  render() {
    return (
      <div>
        <img variant="top" src={this.state.url} alt={this.props.desc} />
      </div>
    )
  }

}

export default Image
