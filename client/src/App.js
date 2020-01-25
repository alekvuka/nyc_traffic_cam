
import React, { Component } from 'react';
import HeaderContainer from './containers/HeaderContainer.js'
import CamerasContainer from './containers/CamerasContainer.js'

class App extends Component {

  render() {
    return (
      <div>
        <HeaderContainer />
        <CamerasContainer />

      </div>
    );
  }
}

export default App;
