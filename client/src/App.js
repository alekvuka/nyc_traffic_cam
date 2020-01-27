import React, { Component } from 'react';
import HeaderContainer from './containers/HeaderContainer.js'
import CamerasContainer from './containers/CamerasContainer.js'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import InputForm from './containers/InputForm.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import HomePage from './containers/HomePage.js'

class App extends Component {

  // renderCameraRoutes = () => {
  //   const aveRoutes = this.props.avenues.map(avenue => {
  //     //debugger
  //     return <Route path={"/cameras" + avenue.name.replace(/\s/g,'')} component={CamerasContainer} />
  //   })
  //   debugger
  //   return aveRoutes
  // }


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

//<Route path="/cameras" component={CamerasContainer} />

const mapStateToProps = state => {
  return {
    avenues: state.avenues
  }
}

export default connect(mapStateToProps)(App)
//<HeaderContainer />
//<CamerasContainer />

//<Route path="/" component={HeaderContainer} />
//<Route path="/cameras" component={CamerasContainer} />
//<Route path="/request" component={InputForm} />
//<Route path="/cameras" component={CamerasContainer} />
