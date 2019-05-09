import React from 'react';
import axios from 'axios';

import requiresAuth from '../auth/requiresAuth';

class Users extends React.Component {
  state = {
    users: [],
  };

  render() {
    return (
      <>
        <h1>Users List</h1>
        <div>
          {this.state.users.map(u => (
            <h3 key={u.id}>{u.username}</h3>
          ))}
        </div>
      </>
    );
  }

  componentDidMount() {
    const endpoint = '/users';
    axios
      .get(endpoint)
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => console.error(err));
  }
}

export default requiresAuth(Users);
