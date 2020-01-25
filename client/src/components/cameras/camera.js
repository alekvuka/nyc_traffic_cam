import React, { Component } from 'react'
import Description from './Description.js'
import CloseButton from './CloseButton.js'
import Image from './Image.js'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

class Camera extends Component {

  render() {
    return (

      // <Card className="text-center">
      //   <Image url={this.props.url} desc={this.props.description} />
      //   <Card.Body>
      //     <Card.Text>
      //       <Description text={this.props.description} />
      //     </Card.Text>
      //   </Card.Body>
      // </Card>




      <Jumbotron fluid>
        <Container>
           <Description text={this.props.description} />
           <CloseButton removeCam={this.props.removeCam} id={this.props.url} />
           <Image url={this.props.url} desc={this.props.description} />
        </Container>
     </Jumbotron>








      // <div>
      //   <Description text={this.props.description} />
      //   <CloseButton removeCam={this.props.removeCam} id={this.props.url} />
      //   <Image url={this.props.url} desc={this.props.description} />
      // </div>
    )
  }
}

export default Camera
