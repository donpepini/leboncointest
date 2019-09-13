import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = props => {
  const { signOut, profile } = props;
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New message</NavLink>
      </li>
      <li >
        <Link to='/' onClick={signOut}>Log out</Link>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating orange darken-1">
          {profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
