import React, { Component } from 'react';
import HeaderContainer from './containers/HeaderContainer.js'
import CamerasContainer from './containers/CamerasContainer.js'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import InputForm from './containers/InputForm.js'

class App extends Component {

  render() {
    return (
        <Router>
            <HeaderContainer />
            <Route path="/request" component={InputForm} />
        </Router>

    );
  }
}

export default App;
//<HeaderContainer />
//<CamerasContainer />

//<Route path="/" component={HeaderContainer} />
//<Route path="/cameras" component={CamerasContainer} />
//<Route path="/request" component={InputForm} />
//<Route path="/cameras" component={CamerasContainer} />
