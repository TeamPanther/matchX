
import React from 'react';

const SingleSpace = (props) => {
  console.log('INSIDE SINGLE SPACES')
  console.log(props.id)
  // id: 1
  // description: "ver noice"
  // location: "player a vister"
  // name: "codesmath"
  // picture: "https://memegenerator.net/img/instances/500x/62087528/pls-hurry.jpg"
  // rating: "42"
  // tags: {wifi: true, noiseTolerance: "high"}

  return (
    <div className='single-space'>
      <h3> {props.name} </h3>
      <h4> {props.location} </h4>
      <img className='space-img' src={props.picture} />
      <p> {props.description} </p>
      <p> Rating: {props.rating} </p>
      <p>
        Wifi: {props.tags.wifi} , Noise Tolerance: {props.tags.noiseTolerance}
      </p>
      {/* delete action goes here */}
      <button onClick={() => console.log('delete button pressed')}>
        Delete
      </button>
    </div>
  );
};

export default SingleSpace;
