<<<<<<< HEAD
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
=======
import React, { Component } from 'react';

import Posts from './Posts';

class Application extends Component {
  state = {
    posts: [
      {
        id: '1',
        title: 'A Very Hot Take',
        content:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit repellendus modi unde cumque, fugit in ad necessitatibus eos sed quasi et! Commodi repudiandae tempora ipsum fugiat. Quam, officia excepturi!',
        user: {
          uid: '123',
          displayName: 'Bill Murray',
          email: 'billmurray@mailinator.com',
          photoURL: 'https://www.fillmurray.com/300/300',
        },
        stars: 1,
        comments: 47,
      },
      {
        id: '2',
        title: 'The Sauciest of Opinions',
        content:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit repellendus modi unde cumque, fugit in ad necessitatibus eos sed quasi et! Commodi repudiandae tempora ipsum fugiat. Quam, officia excepturi!',
        user: {
          uid: '456',
          displayName: 'Mill Burray',
          email: 'notbillmurray@mailinator.com',
          photoURL: 'https://www.fillmurray.com/400/400',
        },
        stars: 3,
        comments: 0,
      },
    ],
  };

  handleCreate = post => {
    const { posts } = this.state;
    this.setState({ posts: [post, ...posts] });
  };

  render() {
    const { posts } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Posts posts={posts} onCreate={this.handleCreate} />
>>>>>>> 5de4ac1a8265642f074fc634045064088fcae714
      </main>
    );
  }
}

export default Application;
