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
    return <Button key={index} onClick={() => props.fetchCameras(avenue.id)}>{avenue.name}</Button>;
  });

  return (
   <div>
   <NavLink to='/cameras'>
    <ButtonGroup>
      {avenues}
    </ButtonGroup>
    </NavLink>
   </div>
 );
}


export default AvenueOptions
