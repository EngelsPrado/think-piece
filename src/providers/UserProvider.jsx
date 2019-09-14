import React, { Component, createContext } from "react";
import { auth, createUserDocument } from "../firebase";

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
  state = { user: null };

  componentDidMount = async () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userDocument = await createUserDocument(user);
        console.log(userDocument);
        return this.setState({ user: userDocument });
      }
      this.setState({ user: null });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromAuth();
  };

  render() {
    const { children } = this.props;
    const { user } = this.state;

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
  }
}

export default UserProvider;
