import React from 'react'
import Post from './Post';
import AddPost from './AddPost';

<<<<<<< HEAD
const Posts = ({ posts }) => {
  return (
    <section className="Posts">
      <AddPost />
      {posts.map(post => <Post  {...post}  key={post.id} />)}
=======
const Posts = ({ posts, onCreate }) => {
  return (
    <section className="Posts">
      <AddPost onCreate={onCreate} />
      {posts.map(post => <Post {...post} key={post.id} />)}
>>>>>>> 5de4ac1a8265642f074fc634045064088fcae714
    </section>
  )
}

export default Posts;
