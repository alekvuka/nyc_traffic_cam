import React, { Component } from 'react'
import Camera from '../components/cameras/Camera.js';
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import DisplayAlert from '../components/header/DisplayAlert.js'
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';


class HomePage extends Component {

  render() {
    return (
      <Container fluid>

          <Card className="text-center" bg="dark" text="white">

              <Card.Header></Card.Header>
              <Card.Body>
                <Card.Title>Welcome to NYC Traffic Cams!</Card.Title>
                <Card.Text>
                  Nothing beats live cameras if you want to find out traffic conditions. That's why we created a database of cameras distributing a live feed of the city's roadways.
                  Each avenue is organized from uptown to downtown. We are constantly adding cameras,please feel free to request new streets/avenues though the link above. Happy motoring in the Big Apple :)
                </Card.Text>
                <Spinner animation="grow" variant="danger" />

              </Card.Body>
              <Card.Footer className="text-muted">The cameras are maintaned by NYC DOT and other NYC city agencies!</Card.Footer>
          </Card>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    cameras: state.cameras
  }
}

const mapDispatchToProps = dispatch => ({
  removeCam: (url) => dispatch({ type: "REMOVE_CAMERA", url})
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
