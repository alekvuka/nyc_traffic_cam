import React, { Component } from 'react';
import HeaderContainer from './containers/HeaderContainer.js'
import CamerasContainer from './containers/CamerasContainer.js'
import Container from 'react-bootstrap/Container'

class App extends Component {

  render() {
    return (
        <Container fluid>
            <HeaderContainer />
            <CamerasContainer />
        </Container>
    );
  }
}

export default App;
