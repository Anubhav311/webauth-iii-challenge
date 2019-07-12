import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    department: '',
  };

  render() {
    return (
      <>
        <h1>SignUp</h1>
        <form onSubmit={this.submitForm}>
          <div>
            <label htmlFor="username" />
            <input
              id="username"
              placeholder="username"
              onChange={this.handleChange}
              value={this.state.username}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password" />
            <input
              id="password"
              placeholder="password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
            />
          </div>
          <div>
            <label htmlFor="department" />
            <input
              id="department"
              placeholder="department"
              onChange={this.handleChange}
              value={this.state.department}
              type="text"
            />
          </div>
          <br></br>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </>
    );
  }

  handleChange = event => {
    const { id, value } = event.target;

    this.setState({ [id]: value });
  };

  submitForm = event => {
    event.preventDefault();
    const endpoint = 'http://localhost:5000/api/auth/register';

    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log(res)
        // localStorage.setItem('jwt', res.data.password);
        this.props.history.push('/login');
      })
      .catch(err => {
        console.error('Login Error', err);
        this.setState({
          username: '',
          password: ''
        });
        alert('Wrong Credentials');
      });
  };
}

export default Login;
