import React, { Component } from 'react';
<<<<<<< HEAD
import { signInWithGoogle } from '../firebase';
=======
>>>>>>> 5de4ac1a8265642f074fc634045064088fcae714

class SignIn extends Component {
  state = { email: '', password: '' };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <form className="SignIn" onSubmit={this.handleSubmit}>
        <h2>Sign In</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.handleChange}
        />
        <input type="submit" value="Sign In" />
<<<<<<< HEAD
        <button onClick={signInWithGoogle}>Sign In With Google</button>
=======
        <button>Sign In With Google</button>
>>>>>>> 5de4ac1a8265642f074fc634045064088fcae714
      </form>
    );
  }
}

export default SignIn;
