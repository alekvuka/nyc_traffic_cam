import React, { Component } from 'react'

class Image extends Component {

  constructor(props){
    super(props)
    this.state = {
      url: props.url + Math.random()
    }
  }


  updateImage = () => {

      // let myHeaders = new Headers({
      //   'Access-Control-Allow-Origin': '*'
      // })
      //
      //   fetch(`http://207.251.86.238/cctv436.jpg?math=${Math.random()}`, {headers: {'Access-Control-Allow-Origin':'*'}}).then(response => {
      //     return response.json()
      //   }).then(data => {
      //     debugger
      //
      //   })
        // var settings = {
        //       "async": true,
        //       "crossDomain": true,
        //       "url": "http://207.251.86.238/cctv436.jpg?math=0.5631298300886098",
        //       "method": "GET",
        //       "headers": {
        //         "cache-control": "no-cache",
        //         "Postman-Token": "2c658a51-902a-4727-a6eb-a5ff16405048"
        //       }
        //     }
        //
        //     $.ajax(settings).done(function (response) {
        //       console.log(response);
        //     });

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
        <img src={this.state.url} alt={this.props.desc} />
      </div>
    )
  }

}

export default Image
