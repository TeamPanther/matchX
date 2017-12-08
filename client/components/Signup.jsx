import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestSignup } from '../actions/actions';

const mapDispatchToProps = dispatch => ({
  // reducers go here (signup post request)
  signup(data) {
    dispatch(requestSignup(data));
  },
});

const mapStateToProps = () => ({});

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      userID: 0,
      submitted: false,
      username: '',
      password: '',
      dateJoined: '',
      email: '',
      phone: '',
      name: '',
      age: 0,
      gender: '',
      genderPreference: '',
      userType: 'Owner',
      tacosPreference: 0,
      magicPreference: 0,
      quesadillaPreference: 0,
      guitarPreference: 0,
      enchiladasPreference: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name, event) {
    this.setState({ [name]: event.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    //set user ID and user data
    let userIDIncrement = this.state.userID +1
    const tempUserData = {
      tacosPreference: this.state.tacos.Preference,
      magicPreference: this.state.magicPreference,
      quesadillaPreference: this.state.quesadillaPreference,
      guitarPreference: this.state.guitarPreference,
      enchiladasPreference: this.state.enchiladasPreference
    }
    
    this.state.userData.push(tempUserData);
  
    //POST user data (state @ index of userID) to the database using fetch
    //put this in the 
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type: ''
      },
      body: JSON.stringify(this.state.userData[userID])
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err)
    })
    
    //update the state
    this.setState({
      userData: this.state.userData,
      submitted: true,
      userID: userIDIncrement,
    })
  }

  render() {
    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userName: this.state.username,
        password: this.state.password,
        email: this.state.email,
        phone: this.state.phone,
        user: this.state.userType,
      }),
    };

    return (
      <div id="sign-up">
        <h3>Signup</h3>
        <h4>
          Username:
          <input
            type="text"
            value={this.state.username}
            onChange={e => this.handleChange('username', e)}
          />
        </h4>
        <h4>
          Password:
          <input
            type="text"
            value={this.state.password}
            onChange={e => this.handleChange('password', e)}
          />
        </h4>
        <h4>
          Name:
          <input/>
            
        </h4>
        <h4>
          Email:
          <input
            type="text"
            value={this.state.email}
            onChange={e => this.handleChange('email', e)}
          />
        </h4>
        <h4>
          Age:
          <input
            type="text"
            value={this.state.phone}
            onChange={e => this.handleChange('phone', e)}
          />
        </h4>
        <h4>
          Gender:
          <select value={this.state.userType} onChange={e => this.handleChange('userType', e)}>
            <option value="Owner">Owner</option>
            <option value="Renter">Renter</option>
          </select>
        </h4>
        <h4>
          Gender Preference:
          <select value={this.state.userType} onChange={e => this.handleChange('userType', e)}>
            <option value="Owner">Owner</option>
            <option value="Renter">Renter</option>
          </select>
        </h4>

        <div>
          <p>Rate your preference on a scale from 1-5</p>
          <p>Completely interested (1) - Love it (5)</p>

          <form onSubmit={this.props.handleSubmit}>
            <p>How much do you like tacos?</p>
            <select id="dropdown1" onChange={this.props.handleWordSelect} value={this.props.monthWord}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            <p>How much do you enjoy magic tricks?</p>
            <select id="dropdown1" onChange={this.props.handleWordSelect} value={this.props.monthWord}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            <p>How much do you like Quesadillas?</p>
            <select id="dropdown1" onChange={this.props.handleWordSelect} value={this.props.monthWord}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            <p>How much do you enjoy air guitar?</p>
            <select id="dropdown1" onChange={this.props.handleWordSelect} value={this.props.monthWord}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option> 
            </select>

            <p>How much do you like enchiladas?</p>
            <select id="dropdown1" onChange={this.props.handleWordSelect} value={this.props.monthWord}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </form>
          <input id="submit" type="submit" value="Submit" />
        </div>



        <h4>
          <br />

          {/* post request (reducers) to signup goes in this button */}
          <button onClick={() => this.props.signup(config)}>
            Signup
          </button>
          Already a user?
          <Link to='/login'>Login</Link>
        </h4>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
