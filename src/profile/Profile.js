import React from "react";
import PropTypes from "prop-types";
function handleName() {
  return alert("Hello! the profile user is Ousama Saoudi");
}

const Profile = (props) => {
  return (
    <div>
      <h1> {props.fullName} </h1>
      <h2> {props.bio} </h2>
      <h3> {props.profession} </h3>
      {props.children}
      {handleName()}
    </div>
  );
};
Profile.defaultProps = {
  content: "empty",
};
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};
export default Profile;
