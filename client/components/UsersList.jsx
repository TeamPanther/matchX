import React from 'react';
import User from './User';

const UsersList = (props) => {
  const usersList = props.usersList.map(user => {
    return <User user={user} />
  })
  return (
    <div className='usersList'>
      {usersList}
    </div>
  );
};

export default UsersList;
