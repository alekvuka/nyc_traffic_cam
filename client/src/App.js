import React from 'react';
import logo from './logo.svg';
import './App.css';
import headerContainer from './containers/headerContainer.js'
import camerasContainer from './containers/camerasContainer.js'

function App() {
  return (
    <div>
      <headerContainer />
      <camerasContainer /> 
    </div>
  );
}

export default App;
