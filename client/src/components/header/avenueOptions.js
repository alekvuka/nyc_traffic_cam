import React from 'react';

const AvenueOptions = props => {
  const avenues = props.avenues.map((avenue, index) => {
    return <button key={index} onClick={() => props.fetchCameras(avenue.id)}>{avenue.name}</button>;
  });

  return (
   <div>
     {avenues}
   </div>
 );
}


export default AvenueOptions
