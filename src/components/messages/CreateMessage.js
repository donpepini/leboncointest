import React, { Component } from "react";
import { connect } from "react-redux";
import { createMessage } from "../../store/actions/messageActions";
import { Redirect } from "react-router-dom";

class CreateMessage extends Component {
  state = {
    title: "",
    content: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createMessage(this.state);
    this.props.history.push('/');
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Write your message</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea
              className="materialize-textarea"
              id="content"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="input-field">
            <button className="btn orange darken-2 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createMessage: message => dispatch(createMessage(message))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMessage);
