import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Spinner from 'react-bootstrap/Spinner'
import { NavLink } from 'react-router-dom';

const AvenueOptions = props => {

  const clicked = (id) => {
    //let state = {avenue: id}
    //let title = ''
    //let url = '/cameras'
    //window.history.pushState(state, title, url)
    props.fetchCameras(id)
  }


  const avenues = props.avenues.map((avenue, index) => {
    return <NavLink to='/cameras'><Button key={index} onClick={props.fetchCameras(avenue.id)}>{avenue.name}</Button></NavLink>;
  });

  return (
   <div>
    <ButtonGroup>
      {avenues}
    </ButtonGroup>
   </div>
 );
}


export default AvenueOptions
