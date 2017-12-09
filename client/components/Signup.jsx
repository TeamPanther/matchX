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
      username: '',
      password: '',
      dateJoined: '',
      pic: '',
      email: '',
      firstName: '',
      lastName: '',
      age: 0,
      gender: '',
      genderPreference: '',
      question1: 0,
      question2: 0,
      question3: 0,
      question4: 0,
      question5: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name, event) {
    // console.log("state: ", this.state);
    this.setState({ [name]: event.target.value });
  }

  render() {
    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        pic: this.state.pic,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        age: this.state.age,
        gender: this.state.gender,
        genderPreference: this.state.genderPreference,
        question1: this.state.question1,
        question2: this.state.question2,
        question3: this.state.question3,
        question4: this.state.question4,
        question5: this.state.question5,
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
          First Name:
          <input
            type="text"
            value={this.state.firstName}
            onChange={e => this.handleChange('firstName', e)}
          />
        </h4>
        <h4>
          Last Name:
          <input
            type="text"
            value={this.state.lastName}
            onChange={e => this.handleChange('lastName', e)}
          />
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
          Profile Picture:
          <input
            type="text"
            value={this.state.pic}
            onChange={e => this.handleChange('pic', e)}
          />
        </h4>
        <h4>
          Age:
          <input
            type="text"
            value={this.state.age}
            onChange={e => this.handleChange('age', e)}
          />
        </h4>
        <h4>
          Gender:
          <select value={this.state.gender} onChange={e => this.handleChange('gender', e)}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </h4>
        <h4>
          Gender Preference:
          <select value={this.state.genderPreference} onChange={e => this.handleChange('genderPreference', e)}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </h4>

        <div>
          <p>Rate your preference on a scale from 1-5</p>
          <p>Completely interested (1) - Love it (5)</p>

          <p>How much do you like tacos?</p>
            <select id="dropdown1" value={this.state.question1} onChange={e => this.handleChange('question1', e)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <p>How much do you enjoy magic tricks?</p>
            <select id="dropdown2" value={this.state.question2} onChange={e => this.handleChange('question2', e)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <p>How much do you like Quesadillas?</p>
            <select id="dropdown3" value={this.state.question3} onChange={e => this.handleChange('question3', e)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <p>How much do you enjoy air guitar?</p>
            <select id="dropdown4" value={this.state.question4} onChange={e => this.handleChange('question4', e)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <p>How much do you like enchiladas?</p>
            <select id="dropdown5" value={this.state.question5} onChange={e => this.handleChange('question5', e)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
        </div>

        <h4>
          <br />
          {/* post request (reducers) to signup goes in this button */}
          <button onClick={() => {
            // console.log("config: ", config);
            this.props.signup(config)
          }}>
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
