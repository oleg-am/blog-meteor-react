import React, { Component, PropTypes } from 'react';

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <h2>Title: {this.props.post.title}</h2>
        <p>
           Text: {this.props.post.text}
        </p>
        {/*<span>Date: {this.props.post.created}</span>*/}
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
