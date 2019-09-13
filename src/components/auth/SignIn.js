import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  //handle signin information
  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;

    //if logged in, redirect to dashboard
    if (auth.uid) {
      return <Redirect to="/" />;
    }
    // if not logged in, show signin form 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="input-field">
            <button className="btn orange darken-2 z-depth-0">Login</button>
            {authError ? <div className="center">Login failed</div> : null}
          </div>
        </form>
      </div>
    );
  }
}

//get authentication informations
const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

//dispatch user signin information to redux
const mapDispatchToProps = dispatch => {
  return {
    signIn: infos => dispatch(signIn(infos))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
