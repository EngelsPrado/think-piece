import React, { Component, createContext } from "react";
import { firestore } from "../firebase";
//import { collectIdsAndData } from "../utilities";

export const PostsContext = createContext();

class PostsProvider extends Component {
  state = { posts: [] };

  unsubscribe = null;

  componentDidMount = () => {
    this.unsubscribeFromFirestore = firestore
      .collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot(snapshot => {
        // NEW
        const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        this.setState({ posts });
      });
  };

  componentWillUnmount = () => {
    this.unsubscribe();
  };

  render() {
    const { posts } = this.state;
    const { children } = this.props;

    return (
      <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>
    );
  }
}

export default PostsProvider;
