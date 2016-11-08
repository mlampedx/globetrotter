import React, {PropTypes} from 'react';

// class Profile extends React.Component {
  // constructor(props) {
  //   this.state = {
  //     google_id: document.cookie.replace(/(?:(?:^|.*;\s*)google_id\s*\=\s*([^;]*).*$)|^.*$/, "$1"),
  //     username: '',
  //     saved_data: {}
  //   }
  // }

// componentDidMount() {
//   let newState = {};
//   let userInfo = {};
//   fetch('/loadProfile:{google_id}').then(data => userInfo = data.blob());
//   Object.assign(newState, this.state);
//   newState.username = userInfo.username;
//   newState.saved_data = userInfo.saved_data;
//   this.setState(newState);
// }

// render() {

const Profile = ({}) => {
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
};

export default Profile;