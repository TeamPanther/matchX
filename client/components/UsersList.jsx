import React from 'react';
import User from './User';

const UsersList = (props) => {
  const usersList = props.usersList.map(user => {
    return <User user={user} />
  })
  return (
    <div className='usersList'>
      GOOD MATCHES!!!
      {usersList}
    </div>
  );
};

export default UsersList;
