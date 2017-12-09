import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const User = (props) => {
  const { user } = props;
  return (
    <div className='user'>
      <Card className='card'>
        <CardHeader
          title={user.username}
          subtitle=''
        />
        <CardMedia
          overlay={<CardTitle title={user.username} subtitle={user.email} />}
        >
          <img src={user.pic.length !== 0 ? user.pic : 'http://www.clker.com/cliparts/d/L/P/X/z/i/no-image-icon-md.png'} alt="" />
        </CardMedia>
        <CardText>
          Hi my name is {user.firstName} {user.lastName}. My email is {user.email}.
          I am a {user.gender} and I am really interested in {user.genderPreference}.
          Call me beb.
        </CardText>
      </Card><br/>
    </div>
  );
};

export default User;
