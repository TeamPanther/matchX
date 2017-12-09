import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const UserProfile = (props) => {
  const { user } = props
  console.log(user)
  return (
    <div className='userProfile' style={{textAlign:'center'}}>
      <Card>
        <CardHeader
          title={user.firstName + ' ' + user.lastName}
          subtitle={user.email}
        />
        <CardMedia overlay={<CardTitle title='' subtitle='' />}>
          <img src={user.pic} alt='' />
        </CardMedia>
        {/* <CardTitle title='' subtitle='' /> */}
        <CardText>
          {user.username}
          {user.gender}
          {user.genderPreference}
          {user.age}
          {user.phone}
        </CardText>
      </Card>
      <FlatButton label="Logout" />
      <br/>
    </div>
  );
};

export default UserProfile;
