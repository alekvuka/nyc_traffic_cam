import React, { Component } from 'react'

class Image extends Component {

  constructor(props){
    super(props)
    this.state = {
      url: props.image + Math.random()
    }
  }


  generateNewUrl = () => {
    this.setState({
      url: this.props.image + Math.random()
    })
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.generateNewUrl(),
      1000
    );

  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }


  render() {
    return (
      <div>
        <img src={this.state.url} alt={this.props.desc} />
      </div>
    )
  }

}

export default Image
