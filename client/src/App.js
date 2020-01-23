import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderContainer from './containers/HeaderContainer.js'
import CamerasContainer from './containers/HamerasContainer.js'

function App() {
  return (
    <div>
      <HeaderContainer />
      <CamerasContainer />
    </div>
  );
}

export default App;
