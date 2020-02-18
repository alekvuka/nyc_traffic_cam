import React, { Component } from 'react'

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
        <img src={this.state.url} alt={this.props.desc} height='320' width='400' />
      </div>
    )
  }

}

export default Image
