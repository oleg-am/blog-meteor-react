import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Posts } from '../api/posts.js';
import Post from './Post.jsx';

class App extends Component {

  renderPosts() {
    return this.props.posts.map((post) => {
      return <Post key={post._id} post={post} />;
    });
  }

  render() {
    return (
      <div className="container">
        <div className="posts">
          <h1>Posts</h1>
          {this.renderPosts()}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    posts: Posts.find({}).fetch(),
  };
}, App);
