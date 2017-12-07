
import React from 'react';
import SingleSpace from './SingleSpace'
// if no spaces write a message
const OwnerSpaces = (props) => {
  console.log('INSIDE OWNER SPACES')
  console.log(props.spaces)

  // description: "ver noice"
  // location: "player a vister"
  // name: "codesmath"
  // picture: "https://memegenerator.net/img/instances/500x/62087528/pls-hurry.jpg"
  // rating: "42"
  // tags: {wifi: true, noiseTolerance: "high"}



  return (
    <div className='owner-spaces'>
        {props.spaces.map((obj, i) => {
          return <SingleSpace
            key={i}
            id={obj._id}
            name={obj.name}
            description={obj.description}
            location={obj.location}
            picture={obj.picture}
            rating={obj.rating}
            tags={obj.tags}
          />
        })}
    </div>
  );
};

export default OwnerSpaces;
