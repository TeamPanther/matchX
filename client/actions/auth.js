import { requestLogin, receiveLogin, loginError } from './actions';

const loginUser = (creds) => {
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: creds.username, password: creds.password }),
  };

  return (dispatch) => {
    dispatch(requestLogin(creds));

    return fetch('http://localhost:3000/user/find', config)
      .then((response) => {
        response.json().then((user) => {
          if (!user) {
            dispatch(loginError('Error'));
            return Promise.reject(user);
          }

          localStorage.setItem('id_token', user.id_token);
          dispatch(receiveLogin(user));
        }).catch(err => console.log(err));
      });
  };
};

export default loginUser;
