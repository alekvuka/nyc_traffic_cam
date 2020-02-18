import React, { Component } from 'react';
import HeaderContainer from './containers/headerContainer.js'
import CamerasContainer from './containers/camerasContainer.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RequestContainer from './containers/RequestContainer.js'
import HomePage from './components/HomePage.js'

class App extends Component {

  render() {
    return (
        <Router>
            <HeaderContainer />
            <Route path="/request" component={RequestContainer} />
            <Route path="/cameras" component={CamerasContainer} />
            <Route exact path='/' component={HomePage}/>
        </Router>

    );
  }
}

export default App
