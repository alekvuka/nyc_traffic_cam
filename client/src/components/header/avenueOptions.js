import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { NavLink } from 'react-router-dom';

const AvenueOptions = props => {

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
