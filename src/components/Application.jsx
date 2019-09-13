import React, { Component } from "react";
import { firestore, createUserDocument } from "../firebase";
import Posts from "./Posts";
import { auth } from "./../firebase";
import CurrentUser from "./CurrentUser";
import SignInAndSignUp from "./SignInAndSignUp";
import { TestTheme } from "./TestTheme";

class Application extends Component {
  state = {
    posts: [],
    user: null,
    userLoaded: false
  };

  unsubscribeFromFirestore = null;
  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    this.unsubscribeFromFirestore = firestore
      .collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot(snapshot => {
        // NEW
        const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        this.setState({ posts });
      });

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      const user = await createUserDocument(userAuth);
      this.setState({ user, userLoaded: true });
    });
  };

  componentWillUnmount = () => {
    // NEW
    this.unsubscribeFromFirestore();
    this.unsubscribeFromAuth();
  };

  render() {
    const { posts, user, userLoaded } = this.state;
    console.log(this.props);
    const userInformation = user ? (
      <CurrentUser {...user} />
    ) : (
      <SignInAndSignUp />
    );
    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <TestTheme></TestTheme>
        {userLoaded && userInformation}
        <Posts posts={posts} />
      </main>
    );
  }
}

export default Application;
