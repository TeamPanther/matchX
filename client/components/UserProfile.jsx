import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const UserProfile = (props) => {
  const { user } = props
  console.log(user)
  return (
    <div className='userProfile'>
      <Card>
        <CardHeader
          title={user.firstName + ' ' + user.lastName}
          subtitle={user.email}
          avatar={user.pic}
        />
        <CardMedia
          overlay={<CardTitle title='' subtitle='' />}
        >
          <img src={user.pic} alt='' />
        </CardMedia>
        <CardTitle title='' subtitle='' />
        <CardText>
          {user.username}
          {user.gender}
          {user.genderPreference}
          {user.age}
          {user.phone}
        </CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
      <br/>
    </div>
  );
};

export default UserProfile;
