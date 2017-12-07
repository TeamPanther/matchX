
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  addSpace: userId => dispatch(actions.addSpace(userId)),
});
// after creating, redirect to success >>> owner dash

class CreateSpace extends React.Component {
  constructor(props) {
    super(props);
    // owner_user_id should come from props
    // auto set rating?
    this.state = {
      name: '',
      location: '',
      description: '',
      rating: 0,
      picture: '',
      tags: '',
      owner_user_id: localStorage.id_token,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(name, event) {
    this.setState({ [name]: event.target.value })
  }


  render() {
    // console.log(this.props.location.state)
    // console.log(this.props.addSpace)
    return (
      <div id="create-space">
        <h3>Create Space</h3>
        <h4>
          Space Name:
          <input
            type="text"
            value={this.state.name}
            onChange={e => this.handleChange('name', e)}
          />
        </h4>
        <h4>
          Location:
          <input
            type="text"
            value={this.state.location}
            onChange={e => this.handleChange('location', e)}
          />
        </h4>
        <h4>
          Description:
          <input
            type="text"
            value={this.state.description}
            onChange={e => this.handleChange('description', e)}
          />
        </h4>
        <h4>
          Picture Link:
          <input
            type="text"
            value={this.state.picture}
            onChange={e => this.handleChange('picture', e)}
          />
        </h4>
        <h4>
          Tags:
          <input
            type="text"
            value={this.state.tags}
            onChange={e => this.handleChange('tags', e)}
          />
        </h4>
        <h4>
          <br />

          {/* post request (reducers) to signup goes in this button */}
          <button onClick={() => this.props.addSpace(
            this.state
          )}>
            Create!
          </button>

          <p>Changed your mind?</p>
          <Link to='/owner'>Back to dashboard</Link>
        </h4>
      </div>
    )
  }
}

// export default connect(mapDispatchToProps)(Signup);

export default connect(mapStateToProps, mapDispatchToProps)(CreateSpace);
