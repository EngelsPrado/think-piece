import React, { Component } from "react";
import { firestore, auth, getUserDocument } from "../firebase";

class AddPost extends Component {
  state = { title: "", content: "" };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { title, content } = this.state;
    const u = auth.currentUser;
    const user = await getUserDocument(u.uid);

    console.log(user);
    const post = {
      title,
      content,
      user: {
        uid: u.uid,
        displayName: user.displayName,
        email: u.email,
        photoURL: u.photoURL
      },
      favorites: 0,
      comments: 0,
      createdAt: new Date()
    };

    firestore.collection("posts").add(post); // NEW

    this.setState({ title: "", content: "" });
  };

  render() {
    const { title, content } = this.state;
    console.log(auth);
    return (
      <form onSubmit={this.handleSubmit} className="AddPost">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="content"
          placeholder="Body"
          value={content}
          onChange={this.handleChange}
        />
        <input className="create" type="submit" value="Create Post" />
      </form>
    );
  }
}

export default AddPost;
