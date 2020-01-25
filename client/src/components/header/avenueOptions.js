import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Spinner from 'react-bootstrap/Spinner'

const AvenueOptions = props => {
  const avenues = props.avenues.map((avenue, index) => {
    return <Button fluid key={index} onClick={() => props.fetchCameras(avenue.id)}>{avenue.name}</Button>;
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
