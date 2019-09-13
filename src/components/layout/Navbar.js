import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//components
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = props => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper blue darken-4">
      <div className="container">
        <Link to="/" className="brand-logo left">
          Leboncoin
        </Link>
        {links}
      </div>
    </nav>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};
export default connect(mapStateToProps)(Navbar);