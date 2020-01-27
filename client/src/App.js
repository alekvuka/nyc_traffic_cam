import React, { Component } from 'react';
import HeaderContainer from './containers/HeaderContainer.js'
import CamerasContainer from './containers/CamerasContainer.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import InputForm from './containers/InputForm.js'
import HomePage from './containers/HomePage.js'

class App extends Component {

  render() {
    return (
        <Router>
            <HeaderContainer />
            <Route path="/request" component={InputForm} />
            <Route path="/cameras" component={CamerasContainer} />
            <Route exact path='/' component={HomePage}/>
        </Router>

    );
  }
}

export default App
